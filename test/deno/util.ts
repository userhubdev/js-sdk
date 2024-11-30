export const USERHUB_ADMIN_KEY = Deno.env.get("TEST_USERHUB_ADMIN_KEY") || "";
export const USERHUB_USER_KEY = Deno.env.get("TEST_USERHUB_USER_KEY") || "";
export const CI = !!Deno.env.get("CI");
