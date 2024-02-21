import type { adminv1 } from "../src";
import { AdminApi, Code, UserApi, UserHubError } from "../src";
import * as constants from "../src/internal/constants";
import { jsonReviser } from "../src/internal/util";
import { createTestServer } from "./test-server";
import { ADMIN_KEY, USER_KEY, testAdmin, testSlow, testUser } from "./util";
import { expect, test } from "vitest";

testAdmin("Admin API", async () => {
  const adminApi = new AdminApi(ADMIN_KEY);

  const res = await adminApi.users.list();
  expect(res).toBeTruthy();
  expect(res.users).instanceof(Array);
});

testUser("User API", async () => {
  const userApi = new UserApi(USER_KEY);

  const res = await userApi.session.get();
  expect(res).toBeTruthy();
  expect(res.scopes).instanceof(Array);
});

test("Model", () => {
  const now = new Date();
  const state = "ACTIVE";

  const user: adminv1.User = {
    id: "usr_1",
    state,
    displayName: "Jane Doe",
    accountConnections: [
      {
        externalId: "test",
        state,
        createTime: now,
        updateTime: now,
      },
    ],
    createTime: now,
    updateTime: now,
  };
  expect(user.displayName).equal("Jane Doe");

  const encodedJson = JSON.stringify(user);
  const jsonDecoded = JSON.parse(encodedJson, jsonReviser) as adminv1.User;

  expect(jsonDecoded.displayName).equal(user.displayName);
  expect(jsonDecoded.createTime).instanceof(Date).eql(user.createTime);
});

test("API GET", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: {
      id: "usr_1",
    },
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  const res = await adminApi.users.get({ userId: "usr_1" });
  expect(res).toHaveProperty("id", "usr_1");

  expect(requests).toHaveLength(1);
  expect(requests[0].method).equal("GET");
  expect(requests[0].url).equal("/admin/v1/users/usr_1");
  expect(requests[0].headers["accept"]).equal("application/json");
  expect(requests[0].headers["authorization"]).equal("Bearer sk_test");
  expect(requests[0].headers["content-type"]).toBeUndefined();
  expect(requests[0].headers["user-agent"]).equal(constants.USER_AGENT);

  const res2 = await adminApi.users.get("usr_1");
  expect(res2).toHaveProperty("id", "usr_1");
  expect(requests).toHaveLength(2);
});

test("API POST", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: {
      id: "usr_1",
      displayName: "Jane Doe",
    },
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  const res = await adminApi.users.create({ displayName: "Jane Doe" });
  expect(res).toHaveProperty("id", "usr_1");

  expect(requests).toHaveLength(1);
  expect(requests[0].method).equal("POST");
  expect(requests[0].url).equal("/admin/v1/users");
  expect(requests[0].headers["accept"]).equal("application/json");
  expect(requests[0].headers["authorization"]).equal("Bearer sk_test");
  expect(requests[0].headers["content-type"]).equal("application/json");
  expect(requests[0].headers["user-agent"]).equal(constants.USER_AGENT);
  expect(JSON.parse(requests[0].body)).eql({ displayName: "Jane Doe" });
});

test("API PATCH", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: {
      id: "usr_1",
      displayName: "Jane Doe",
    },
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  const res = await adminApi.users.update({
    userId: "usr_1",
    displayName: "",
    allowMissing: true,
  });
  expect(res).toHaveProperty("id", "usr_1");

  expect(requests).toHaveLength(1);
  expect(requests[0].method).equal("PATCH");
  expect(requests[0].url).equal("/admin/v1/users/usr_1?allowMissing=true");
  expect(requests[0].headers["accept"]).equal("application/json");
  expect(requests[0].headers["authorization"]).equal("Bearer sk_test");
  expect(requests[0].headers["content-type"]).equal("application/json");
  expect(requests[0].headers["user-agent"]).equal(constants.USER_AGENT);
  expect(JSON.parse(requests[0].body)).eql({ displayName: "" });

  const res2 = await adminApi.users.update("usr_1", {
    displayName: "",
    allowMissing: true,
  });
  expect(res2).toHaveProperty("id", "usr_1");
  expect(requests).toHaveLength(2);
});

test("API DELETE", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: {
      id: "usr_1",
      displayName: "Jane Doe",
    },
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  const res = await adminApi.users.delete({ userId: "usr_1" });
  expect(res).toHaveProperty("id", "usr_1");

  expect(requests).toHaveLength(1);
  expect(requests[0].method).equal("DELETE");
  expect(requests[0].url).equal("/admin/v1/users/usr_1");
  expect(requests[0].headers["accept"]).equal("application/json");
  expect(requests[0].headers["authorization"]).equal("Bearer sk_test");
  expect(requests[0].headers["content-type"]).toBeUndefined();
  expect(requests[0].headers["user-agent"]).equal(constants.USER_AGENT);
  expect(requests[0].body).equal("");

  const res2 = await adminApi.users.delete("usr_1");
  expect(res2).toHaveProperty("id", "usr_1");

  expect(requests).toHaveLength(2);
});

test("API error", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: {
      code: "NOT_FOUND",
      message: "Not Found",
      metadata: {},
    },
    statusCode: 404,
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  let error: unknown;
  try {
    await adminApi.users.get({ userId: "usr_1" });
  } catch (e) {
    error = e;
  }

  expect(error).instanceof(UserHubError);

  if (!(error instanceof UserHubError)) return;

  expect(error.message).equal(
    "Not Found (call: admin.users.get, apiCode: NOT_FOUND)",
  );
  expect(error.apiMessage).equal("Not Found");
  expect(error.apiCode).equal(Code.NotFound);
  expect(error.statusCode).equal(404);
});

testSlow("API rate limited", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: "API call rate limited",
    statusCode: 429,
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  const startTime = Date.now();

  let error: unknown;
  try {
    await adminApi.users.get({ userId: "usr_1" });
  } catch (e) {
    error = e;
  }

  const endTime = Date.now();

  expect(error).instanceof(UserHubError);

  if (!(error instanceof UserHubError)) return;

  expect(error.message).equal(
    "API call rate limited (call: admin.users.get, apiCode: RESOURCE_EXHAUSTED)",
  );
  expect(error.apiMessage).equal("API call rate limited");
  expect(error.apiCode).equal(Code.ResourceExhausted);
  expect(error.statusCode).equal(429);

  expect(requests).toHaveLength(6);

  const diff = endTime - startTime;
  expect(diff).toBeGreaterThanOrEqual(2 * 1000);
  expect(diff).toBeLessThanOrEqual(4 * 1000);
});

test("Abort retry", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: "API call rate limited",
    statusCode: 429,
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });
  const signal = AbortSignal.timeout(50);
  const startTime = Date.now();

  let error: unknown;
  try {
    await adminApi.users.get({ userId: "usr_1", signal });
  } catch (e) {
    error = e;
  }

  const endTime = Date.now();

  expect(error).instanceof(UserHubError);

  if (!(error instanceof UserHubError)) return;

  expect(error.apiMessage).equal("API call rate limited");
  expect(error.apiCode).equal(Code.ResourceExhausted);
  expect(error.statusCode).equal(429);

  expect(endTime - startTime).toBeLessThanOrEqual(200);
});

test("Abort request", async () => {
  const { baseUrl, requests } = await createTestServer({
    body: "{}",
    statusCode: 200,
    delay: 1000,
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });
  const signal = AbortSignal.timeout(50);

  let error: unknown;
  try {
    await adminApi.users.get({ userId: "usr_1", signal });
  } catch (e) {
    error = e;
  }

  expect(error).instanceof(UserHubError);

  if (!(error instanceof UserHubError)) return;

  expect(error.message).matches(/timeout/i);
  expect(error.message).contain("admin.users.get");
});

test("Retry network error", async () => {
  const { baseUrl, requests } = await createTestServer({
    closeImmediately: true,
  });

  const adminApi = new AdminApi("sk_test", { baseUrl });

  const controller = new AbortController();
  const timeout = setTimeout(controller.abort.bind(controller), 200);

  let error: unknown;
  try {
    await adminApi.users.get({ userId: "usr_1", signal: controller.signal });
  } catch (e) {
    error = e;
  } finally {
    controller.abort();
    clearTimeout(timeout);
  }

  expect(requests.length).greaterThanOrEqual(2);

  expect(error).instanceof(Error);

  if (!(error instanceof Error)) return;

  expect(error.message).match(/fetch failed/);
});
