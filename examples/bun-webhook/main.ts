import { Webhook } from "@userhub/sdk";

const port = process.env.PORT || "8000";

const signingSecret = process.env.SIGNING_SECRET;
if (!signingSecret) {
  console.error("SIGNING_SECRET required");
  process.exit(1);
}

const webhook = new Webhook(signingSecret);

webhook.onEvent((event) => {
  console.log("Event:", event.type);

  if (event.type === "organizations.changed") {
    const organization = event.organizationsChanged?.organization;
    console.log(
      " - Organization:",
      organization?.id,
      organization?.displayName,
    );
  } else if (event.type === "users.changed") {
    const user = event.usersChanged?.user;
    console.log(" - User:", user?.id, user?.displayName);
  }
});

const server = Bun.serve({
  port,

  async fetch(req: Request): Promise<Response> {
    return await webhook.handleFromWeb(req);
  },
});

console.log(`Listening on ${server.url}`);
