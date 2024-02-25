import { encodePath, isNetworkError } from "../../src/internal/util.ts";
import { testSlow } from "../util.ts";
import { expect, test } from "vitest";

test("encodePath", () => {
  const tests: Record<string, string> = {
    "": "",
    one: "one",
    "one/two": "one%2Ftwo",
    "/one": "%2Fone",
    "one/": "one%2F",
    "/one/two/": "%2Fone%2Ftwo%2F",
    "hello@world": "hello@world",
    "hello@world@universe": "hello@world@universe",
  };

  for (const [input, expected] of Object.entries(tests)) {
    expect(encodePath(input)).equals(expected);
  }
});

testSlow("isNetworkError", async () => {
  const tests: {
    name: string;
    url: string;
    init?: RequestInit;
    expected: boolean;
  }[] = [
    {
      name: "Invalid URL",
      url: "invalid",
      expected: false,
    },
    {
      name: "Invalid Header",
      url: "https://example.com",
      init: {
        headers: { "C ontent-Type": "text/xml" },
      },
      expected: false,
    },
    {
      name: "Invalid URL scheme",
      url: "https://user:pass@example.com",
      expected: false,
    },
    {
      name: "Invalid URL scheme",
      url: "https://example.com",
      init: {
        referrer: "./abc\u0000df",
      },
      expected: false,
    },
    {
      name: "URL does not resolve",
      url: "http://fail.userhub.net",
      expected: true,
    },
  ];

  for (const test of tests) {
    const controller = new AbortController();
    const timeout = setTimeout(controller.abort.bind(controller), 300);

    let error: unknown;
    try {
      const init = { ...test.init };
      init.signal = controller.signal;
      await fetch(test.url, init);
    } catch (e) {
      error = e;
    } finally {
      controller.abort();
      clearTimeout(timeout);
    }

    expect(error).instanceof(Error);
    expect(error).toBeTruthy();
    if (!error || !(error instanceof Error)) continue;

    expect(isNetworkError(error)).equals(
      test.expected,
      `${test.name}: ${error.message}`,
    );
  }
});
