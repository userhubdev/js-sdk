import * as constants from "./constants";

export function summarizeBody(s?: string): string {
  if (!s) return "";

  s = s
    .slice(0, constants.SUMMARIZE_BODY_LENGTH * 2)
    .replace(/\s+/g, " ")
    .trim();

  if (!s) return "";

  if (s.length <= constants.SUMMARIZE_BODY_LENGTH) {
    return `: ${s}`;
  }
  return `: ${s.slice(0, constants.SUMMARIZE_BODY_LENGTH)}...`;
}

export function jsonReviser(key: string, value: any): any {
  if (
    value &&
    (key === "time" || key.endsWith("Time")) &&
    typeof value === "string"
  ) {
    return new Date(value);
  }
  return value;
}

const pathSafeChars = "$&+,;=:@".split("").filter((c) => {
  const e = encodeURIComponent(c);
  return e.length === 3 && e[0] === "%";
});
const pathSafeEncoded = pathSafeChars.map(encodeURIComponent);
const pathSafeRegExp = new RegExp(
  "\\%(" + pathSafeEncoded.map((v) => v.slice(1)).join("|") + ")",
  "g",
);

const pathSafeDecode = (v: string) => {
  return pathSafeChars[pathSafeEncoded.indexOf(v)] || v;
};

export function encodePath(s: string) {
  return encodeURIComponent(s).replace(pathSafeRegExp, pathSafeDecode);
}

export async function sleep(
  ms: number,
  signal?: AbortSignal | null,
): Promise<void> {
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, ms);

    if (signal) {
      signal.addEventListener(
        "abort",
        () => {
          clearTimeout(timeout);
          resolve(null);
        },
        { once: true },
      );
    }
  });
}

export function isNetworkError(ex: unknown): boolean {
  if (!(ex instanceof Error)) {
    return false;
  }

  if ("code" in ex && typeof ex.code === "string") {
    if (constants.IGNORE_ERROR_CODES.includes(ex.code)) {
      return false;
    }

    if (constants.RETRY_ERROR_CODES.includes(ex.code)) {
      return true;
    }
  }

  return (
    !ex.message.match(/(argument|url|header|credentials|referrer|cors)/i) &&
    !!ex.message.match(/fetch/i)
  );
}
