import { Webhook } from "npm:@userhub/sdk@latest";

async function main() {
  const port = parseInt(Deno.env.get("PORT") || "8000", 10);

  const signingSecret = Deno.env.get("SIGNING_SECRET") || "";
  if (!signingSecret) {
    console.error("SIGNING_SECRET required");
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
}

main().catch(console.error);
