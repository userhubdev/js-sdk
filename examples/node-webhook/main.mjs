import { Webhook, WebhookRequest } from "@userhub/sdk/webhook";
import { createServer } from "http";

async function main() {
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
      const organization = event.organizationsChanged.organization;
      console.log(
        " - Organization:",
        organization.id,
        organization.displayName,
      );
    } else if (event.type === "users.changed") {
      const user = event.usersChanged.user;
      console.log(" - User:", user.id, user.displayName);
    }
  });

  const server = createServer((req, res) => {
    const chunks = [];

    req.on("data", (v) => {
      chunks.push(v);
    });

    req.on("end", async () => {
      const r = await webhook.handle(
        new WebhookRequest({
          body: chunks.join(""),
          headers: req.headers,
        }),
      );

      res.statusCode = r.statusCode;
      for (const [name, value] of r.headers.entries()) {
        res.setHeader(name, value);
      }
      res.end(r.body);
    });
  });

  server.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}

main().catch(console.error);
