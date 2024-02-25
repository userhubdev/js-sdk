export const ADMIN_KEY = Deno.env.get("TEST_ADMIN_KEY") || "";
export const USER_KEY = Deno.env.get("TEST_USER_KEY") || "";
export const CI = !!Deno.env.get("CI");
