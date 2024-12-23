import { Webhook } from "https://deno.land/x/userhub_sdk/mod.ts";

const port = parseInt(Deno.env.get("PORT") || "8000", 10);

const signingSecret = Deno.env.get("USERHUB_SIGNING_SECRET") || "";
if (!signingSecret) {
  console.error("USERHUB_SIGNING_SECRET required");
  Deno.exit(1);
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

Deno.serve({ port }, async (req: Request): Promise<Response> => {
  return await webhook.handleFromWeb(req);
});
