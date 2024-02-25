import { BuildInput, build } from "../../../src/internal/http.ts";
import { expect, test } from "vitest";

test("build", () => {
  const get: BuildInput = {
    call: "test.get",
    method: "GET",
    args: [],
    path: "/get",
  };
  const post: BuildInput = {
    call: "test.post",
    method: "POST",
    args: [],
    path: "/post",
  };

  const signal = AbortSignal.abort("test");

  const tests: {
    name: string;
    input: BuildInput;
    expected: {
      path: string;
      body?: Record<string, any>;
      query?: Record<string, string>;
      signal?: AbortSignal;
      idempotent?: boolean;
    };
  }[] = [
    {
      name: "No args",
      input: { ...get, path: "/test" },
      expected: { path: "/test" },
    },
    {
      name: "Body arg",
      input: {
        ...post,
        args: [{ hello: "world" }],
        path: "/test",
      },
      expected: {
        path: "/test",
        body: { hello: "world" },
      },
    },
    {
      name: "Named path param",
      input: {
        ...get,
        args: [{ hello: "world" }],
        path: "/test/{hello}",
      },
      expected: {
        path: "/test/world",
      },
    },
    {
      name: "Positional path param",
      input: {
        ...get,
        args: ["world"],
        path: "/test/{hello}",
      },
      expected: {
        path: "/test/world",
      },
    },
    {
      name: "Multiple path params",
      input: {
        ...get,
        args: [{ one: 1, two: "2" }],
        path: "/one/{one}/two/{two}",
      },
      expected: {
        path: "/one/1/two/2",
      },
    },
    {
      name: "Mixed positional and path params",
      input: {
        ...get,
        args: ["1 ", { two: "2/" }],
        path: "/one/{one}/two/{two}",
      },
      expected: {
        path: "/one/1%20/two/2%2F",
      },
    },
    {
      name: "Absent query param",
      input: {
        ...get,
        args: ["1"],
        path: "/one/{one}",
        query: ["view"],
      },
      expected: {
        path: "/one/1",
      },
    },
    {
      name: "Absent query param with body",
      input: {
        ...post,
        args: ["1", { hello: "world" }],
        path: "/one/{one}",
        query: ["view"],
      },
      expected: {
        path: "/one/1",
        body: { hello: "world" },
      },
    },
    {
      name: "Everything",
      input: {
        ...post,
        args: ["1", "2", { three: 3, hello: "world", view: "basic", signal }],
        path: "/{one}/{two}/{three}",
        query: ["view"],
        idempotent: true,
      },
      expected: {
        path: "/1/2/3",
        body: { hello: "world" },
        query: { view: "basic" },
        signal,
        idempotent: true,
      },
    },
  ];

  for (const test of tests) {
    const actual = build(test.input);
    expect(actual.path).eql(test.expected.path);
    expect(actual.query).eql(test.expected.query || {});
    expect(actual.body).eql(test.expected.body);
    expect(actual.signal).equal(test.expected.signal);
    expect(actual.idempotent).equal(test.expected.idempotent || false);
  }

  expect(() => build({ ...get, path: "/{one}" })).toThrowError(
    'The "one" argument is required (call: test.get)',
  );
  expect(() =>
    build({ ...get, path: "/{one}/{two}", args: ["one"] }),
  ).toThrowError('The "two" argument is required (call: test.get)');
  expect(() =>
    build({ ...get, path: "/{one}/{two}", args: ["one", { two: "" }] }),
  ).toThrowError('The "two" argument is required (call: test.get)');
});
