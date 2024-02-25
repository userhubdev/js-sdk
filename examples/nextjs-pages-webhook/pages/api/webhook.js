import { Webhook, WebhookRequest } from "@userhub/sdk";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
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

  const r = await webhook.handle(
    new WebhookRequest({
      headers: req.headers,
      body,
    }),
  );

  res.statusCode = r.statusCode;
  for (const [name, value] of r.headers.entries()) {
    res.setHeader(name, value);
  }
  res.end(r.body);
}
