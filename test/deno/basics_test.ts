import { jsonReviser } from "../../src/internal/util.ts";
import { AdminApi, UserApi, type adminv1 } from "../../src/mod.ts";
import { ADMIN_KEY, USER_KEY } from "./util.ts";
import {
  assert,
  assertEquals,
  assertInstanceOf,
} from "https://deno.land/std@0.217.0/assert/mod.ts";

Deno.test({
  name: "Admin API",
  fn: async () => {
    const adminApi = new AdminApi(ADMIN_KEY);

    const res = await adminApi.users.list();
    assert(res);
    assertInstanceOf(res.users, Array);
  },
  ignore: !ADMIN_KEY,
});

Deno.test({
  name: "User API",
  fn: async () => {
    const userApi = new UserApi(USER_KEY);

    const res = await userApi.session.get();
    assert(res);
    assertInstanceOf(res.scopes, Array);
  },
  ignore: !USER_KEY,
});

Deno.test("Model", () => {
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
        paymentMethods: [],
        createTime: now,
        updateTime: now,
      },
    ],
    memberships: [],
    createTime: now,
    updateTime: now,
  };
  assertEquals(user.displayName, "Jane Doe");

  const encodedJson = JSON.stringify(user);
  const jsonDecoded = JSON.parse(encodedJson, jsonReviser) as adminv1.User;

  assertEquals(jsonDecoded.displayName, user.displayName);
  assertInstanceOf(jsonDecoded.createTime, Date);
  assertEquals(jsonDecoded.createTime, user.createTime);
});
