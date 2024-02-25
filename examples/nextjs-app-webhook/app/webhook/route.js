import { Webhook, WebhookRequest } from "@userhub/sdk";

export async function POST(req) {
  const signingSecret = process.env.SIGNING_SECRET;
  if (!signingSecret) {
    throw new Error("SIGNING_SECRET required");
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

  return await webhook.handleFromWeb(req);
}
