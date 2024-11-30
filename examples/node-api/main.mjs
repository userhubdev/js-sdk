import { AdminApi, UserApi } from "@userhub/sdk";

const adminKey = process.env.USERHUB_ADMIN_KEY;
if (!adminKey) {
  console.error("USERHUB_ADMIN_KEY required");
  process.exit(1);
}

const userKey = process.env.USERHUB_USER_KEY;
if (!userKey) {
  console.error("USERHUB_USER_KEY required");
  process.exit(1);
}

const adminApi = new AdminApi(adminKey);

const res = await adminApi.users.list({ pageSize: 5 });

for (const user of res.users) {
  if (user.disabled) {
    continue;
  }

  const apiSession = await adminApi.users.createApiSession(user.id);

  const userApi = new UserApi(userKey, apiSession.accessToken);

  const session = await userApi.session.get();

  console.log("User:");
  console.log(" - ID:", session.user.id);
  console.log(" - Name:", session.user.displayName);
  console.log(" - Memberships:", session.memberships.length);

  break;
}

try {
  await adminApi.users.get("fail");
} catch (ex) {
  console.log();
  console.log(ex);
  console.log();
  console.log("UserHub error:");
  console.log(" - ApiCode:", ex.apiCode);
  console.log(" - Message:", ex.apiMessage);
  console.log(" - Reason:", ex.reason);
  console.log(" - Param:", ex.param);
  console.log(" - Call:", ex.call);
}
