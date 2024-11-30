import { Webhook, WebhookRequest } from "@userhub/sdk";
import express from "express";

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

const apiRouter = express.Router();
apiRouter.use(express.json());

// POST /api/ping
apiRouter.post("/ping", (req, res) => {
  res.status(200).send(req.body);
});

const webhookRouter = express.Router();
webhookRouter.use(express.raw({ type: "*/*" }));

// POST /webhook
webhookRouter.post("", async (req, res) => {
  const r = await webhook.handle({
    headers: req.headers,
    body: req.body,
  });

  for (const [name, value] of r.headers.entries()) {
    res.append(name, value);
  }
  res.status(r.statusCode).send(r.body);
});

const app = express();
app.use("/api", apiRouter);
app.use("/webhook", webhookRouter);
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
