import { Webhook, WebhookRequest } from "@userhub/sdk";
import { createServer } from "http";

const port = process.env.PORT || "8000";

const signingSecret = process.env.USERHUB_SIGNING_SECRET;
if (!signingSecret) {
  console.error("USERHUB_SIGNING_SECRET required");
  process.exit(1);
}

const webhook = new Webhook(signingSecret);

webhook.onEvent((event) => {
  console.log("Event:", event.type);

  if (event.type === "organizations.changed") {
    const organization = event.organizationsChanged.organization;
    console.log(" - Organization:", organization.id, organization.displayName);
  } else if (event.type === "users.changed") {
    const user = event.usersChanged.user;
    console.log(" - User:", user.id, user.displayName);
  }
});

const server = createServer(async (req, res) => {
  const chunks = [];

  const body = await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (v) => {
      chunks.push(v);
    });
    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    req.on("error", reject);
  });

  const r = await webhook.handle({
    body,
    headers: req.headers,
  });

  res.statusCode = r.statusCode;
  for (const [name, value] of r.headers.entries()) {
    res.setHeader(name, value);
  }
  res.end(r.body);
});

server.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
