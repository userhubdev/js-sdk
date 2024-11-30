import { test } from "vitest";

export const USERHUB_ADMIN_KEY = process.env.TEST_USERHUB_ADMIN_KEY || "";
export const USERHUB_USER_KEY = process.env.TEST_USERHUB_USER_KEY || "";
export const CI = !!process.env.CI;

export const testAdmin = test.skipIf(!USERHUB_ADMIN_KEY);
export const testUser = test.skipIf(!USERHUB_USER_KEY);
export const testSlow = test.skipIf(!CI);
