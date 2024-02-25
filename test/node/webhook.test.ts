// Code generated. DO NOT EDIT.
import * as constants from "../../src/internal/constants.ts";
import { Code, UserHubError, type eventsv1 } from "../../src/mod.ts";
import { Webhook } from "../../src/webhook/actions.ts";
import { concatArrays, loadCrypto } from "../../src/webhook/base.ts";
import {
  WebhookRequest,
  WebhookResponse,
  getHeader,
} from "../../src/webhook/http.ts";
import { expect, test } from "vitest";

test.each<WebhookTest>([
  {
    name: "Signing secret is required",
    secret: "",
    request: new WebhookRequest({
      body: "",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Signing secret is required","code":"UNKNOWN"}',
    }),
  },
  {
    name: "Headers are required",
    secret: "test",
    request: new WebhookRequest({
      body: "",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Headers are required","code":"UNKNOWN"}',
    }),
  },
  {
    name: "Body is required",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "content-type": "application/json",
      },
      body: "",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Body is required","code":"UNKNOWN"}',
    }),
  },
  {
    name: "UserHub-Action header is missing",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "content-type": "application/json",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"UserHub-Action header is missing","code":"UNKNOWN"}',
    }),
  },
  {
    name: "UserHub-Timestamp header is missing",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"UserHub-Timestamp header is missing","code":"UNKNOWN"}',
    }),
  },
  {
    name: "UserHub-Signature header is missing",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"UserHub-Signature header is missing","code":"UNKNOWN"}',
    }),
    setTimestamp: true,
  },
  {
    name: "Signatures normalized to nothing",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
        "UserHub-Signature": ",",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"UserHub-Signature header normalized to nothing","code":"UNKNOWN"}',
    }),
    setTimestamp: true,
  },
  {
    name: "Timestamp is invalid",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
        "UserHub-Timestamp": "timestamp",
        "UserHub-Signature": "fail",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Timestamp is invalid: timestamp","code":"UNKNOWN"}',
    }),
  },
  {
    name: "Timestamp is too far in the past",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
        "UserHub-Timestamp": "1",
        "UserHub-Signature": "fail",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Timestamp is too far in the past: 1","code":"UNKNOWN"}',
    }),
  },
  {
    name: "Timestamp is too far in the past",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
        "UserHub-Timestamp": "5000000000",
        "UserHub-Signature": "fail",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Timestamp is too far in the future: 5000000000","code":"UNKNOWN"}',
    }),
  },
  {
    name: "Signatures do not match",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
        "UserHub-Signature": "fail",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 500,
      body: '{"message":"Signatures do not match","code":"UNKNOWN"}',
    }),
    setTimestamp: true,
  },
  {
    name: "Challenge",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "challenge",
      },
      body: '{"challenge": "some-value"}',
    }),
    response: new WebhookResponse({
      statusCode: 200,
      body: '{"challenge": "some-value"}',
    }),
    setTimestamp: true,
    addSignature: true,
  },
  {
    name: "Handle multiple signature headers",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "challenge",
        "UserHub-Signature": "fail",
      },
      body: '{"challenge": "some-value"}',
    }),
    response: new WebhookResponse({
      statusCode: 200,
      body: '{"challenge": "some-value"}',
    }),
    setTimestamp: true,
    addSignature: true,
  },
  {
    name: "Handle combined signature headers",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "challenge",
        "UserHub-Signature": "fail, {signature}",
      },
      body: '{"challenge": "some-value"}',
    }),
    response: new WebhookResponse({
      statusCode: 200,
      body: '{"challenge": "some-value"}',
    }),
    setTimestamp: true,
    setSignature: true,
  },
  {
    name: "Handler not implemented",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "unknown",
      },
      body: "{}",
    }),
    response: new WebhookResponse({
      statusCode: 501,
      body: '{"message":"Handler not implemented: unknown","code":"UNIMPLEMENTED"}',
    }),
    setTimestamp: true,
    addSignature: true,
  },
  {
    name: "Event handler succeeds",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
      },
      body: '{"type": "ok"}',
    }),
    response: new WebhookResponse({
      statusCode: 200,
      body: "{}",
    }),
    setTimestamp: true,
    addSignature: true,
  },
  {
    name: "Event handler errors",
    secret: "test",
    request: new WebhookRequest({
      headers: {
        "UserHub-Action": "events.handle",
      },
      body: '{"type": "fail"}',
    }),
    response: new WebhookResponse({
      statusCode: 400,
      body: '{"message":"Event failed: fail","code":"INVALID_ARGUMENT"}',
    }),
    setTimestamp: true,
    addSignature: true,
  },
])("handler: $name", async (test) => {
  const webhook = new Webhook(test.secret);

  webhook.onEvent((event: eventsv1.Event) => {
    if (event.type !== "ok") {
      throw new UserHubError({
        message: `Event failed: ${event.type}`,
        apiCode: Code.InvalidArgument,
      });
    }
  });

  const encoder = new TextEncoder();

  if (test.setTimestamp) {
    test.request.headers.set(
      "UserHub-Timestamp",
      Math.trunc(Date.now() / 1000).toString(),
    );
  }

  if (test.setSignature || test.addSignature) {
    const { subtle } = await loadCrypto();

    const key = await subtle.importKey(
      "raw",
      encoder.encode(test.secret),
      {
        name: "HMAC",
        hash: { name: "SHA-256" },
      },
      false,
      ["sign"],
    );

    const data = concatArrays(
      encoder.encode(
        getHeader(test.request.headers, "UserHub-Timestamp") + ".",
      ),
      test.request.body,
    );

    const signature = encodeHex(
      new Uint8Array(await subtle.sign("hmac", key, data)),
    );

    if (test.setSignature) {
      const header = test.request.headers.get("UserHub-Signature");

      if (header && header.includes("{signature}")) {
        test.request.headers.set(
          "UserHub-Signature",
          header.replace(/\{signature}/, signature),
        );
      } else {
        test.request.headers.set("UserHub-Signature", signature);
      }
    } else {
      test.request.headers.append("UserHub-Signature", signature);
    }
  }

  const res = await webhook.handle(test.request);

  const message = `${test.name}: ${res.body}`;

  expect(res.statusCode).equal(test.response.statusCode, message);

  expect(res.headers.get("content-type")).equal("application/json", message);
  expect(res.headers.get(constants.WEBHOOK_AGENT_HEADER)).equal(
    constants.USER_AGENT,
    message,
  );

  const expected = JSON.parse(test.response.body);
  const actual = JSON.parse(res.body);

  expect(actual).eql(expected, message);
});

interface WebhookTest {
  name: string;
  secret: string;
  setTimestamp?: boolean;
  setSignature?: boolean;
  addSignature?: boolean;
  request: WebhookRequest;
  response: WebhookResponse;
}

function encodeHex(value: Uint8Array): string {
  return Array.from(value)
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("");
}
