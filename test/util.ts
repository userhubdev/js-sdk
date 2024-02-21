import { expect, test } from "vitest";

export const ADMIN_KEY = process.env.TEST_ADMIN_KEY || "";
export const USER_KEY = process.env.TEST_USER_KEY || "";
export const CI = !!process.env.CI;

export const testAdmin = test.skipIf(!ADMIN_KEY);
export const testUser = test.skipIf(!USER_KEY);
export const testSlow = test.skipIf(!CI);
