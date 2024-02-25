import { Client as BaseAdminApi } from "./adminapi.ts";
import { UserHubError } from "./error.ts";
import * as constants from "./internal/constants.ts";
import { HttpTransport } from "./internal/http-transport.ts";
import { Client as BaseUserApi } from "./userapi.ts";

interface AdminApiOptions {
  adminKey: string;
  baseUrl?: string;
}

/**
 * The client for the Admin API.
 */
export class AdminApi extends BaseAdminApi {
  constructor(adminKey: string, options?: Omit<AdminApiOptions, "adminKey">);
  constructor(options: AdminApiOptions);
  constructor(...args: any[]) {
    let adminKey: string = "";
    let options: AdminApiOptions | Omit<AdminApiOptions, "adminKey"> = {};

    if (args.length > 0) {
      if (typeof args[0] === "string") {
        if (args[0]) adminKey = args[0];
      } else if (typeof args[0] === "object" && args[0]) {
        options = args[0];
      }
    }
    if (args.length > 1 && typeof args[1] === "object" && args[1]) {
      options = args[1];
    }

    if (!adminKey) {
      if ("adminKey" in options && options.adminKey) {
        adminKey = options.adminKey;
      } else {
        throw new UserHubError("adminKey required");
      }
    }
    if (!adminKey.startsWith(constants.ADMIN_KEY_PREFIX)) {
      throw new UserHubError(
        `adminKey must start with '${constants.ADMIN_KEY_PREFIX}'`,
      );
    }

    const headers: Headers = new Headers();
    headers.set(constants.AUTH_HEADER, "Bearer " + adminKey);

    super(new HttpTransport({ headers, baseUrl: options.baseUrl }));
  }
}

interface UserApiOptions {
  userKey: string;
  accessToken?: string;
  baseUrl?: string;
}

/**
 * The client for the User API.
 */
export class UserApi extends BaseUserApi {
  constructor(userKey: string, options?: Omit<UserApiOptions, "userKey">);
  constructor(
    userKey: string,
    accessToken?: string,
    options?: Omit<UserApiOptions, "userKey" | "accessToken">,
  );
  constructor(options: UserApiOptions);
  constructor(...args: any[]) {
    let userKey: string = "";
    let accessToken: string = "";
    let options:
      | UserApiOptions
      | Omit<UserApiOptions, "userKey" | "accessToken"> = {};

    done: for (let i = 0; i < Math.min(args.length, 3); i++) {
      const v = args[i];

      switch (typeof v) {
        case "string":
          if (i === 0) {
            userKey = v;
          } else {
            accessToken = v;
          }
          break;
        case "object":
          options = v;
          break done;
        default:
          break done;
      }
    }

    if (!options) options = {};

    if (!userKey) {
      if ("userKey" in options && options.userKey) {
        userKey = options.userKey;
      } else {
        throw new UserHubError("userKey required");
      }
    }
    if (!userKey.startsWith(constants.USER_KEY_PREFIX)) {
      throw new UserHubError(
        `userKey must start with '${constants.USER_KEY_PREFIX}'`,
      );
    }

    if (!accessToken && "accessToken" in options && options.accessToken) {
      accessToken = options.accessToken;
    }

    const headers: Headers = new Headers();
    headers.set(constants.API_KEY_HEADER, userKey);
    if (accessToken) {
      headers.set(constants.AUTH_HEADER, "Bearer " + accessToken);
    }

    super(new HttpTransport({ headers, baseUrl: options.baseUrl }));
  }
}
