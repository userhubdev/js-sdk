# UserHub JavaScript SDK

[![npm Latest Version](https://img.shields.io/npm/v/%40userhub%2Fsdk?color=0173b4)](https://www.npmjs.com/package/%40userhub/sdk)
[![JSR Latest Version](https://img.shields.io/jsr/v/%40userhub/sdk?color=0173b4)](https://jsr.io/%40userhub/sdk)

The official [UserHub](https://userhub.com) JavaScript SDK.

Stability: alpha

### Requirements

- Node 18 or later
- Deno 1.28 or later
- Bun 1 or later

### Getting Started

Install SDK

```sh
npm install @userhub/sdk
```

Example

```ts
import { AdminApi } from "@userhub/sdk";

const adminApi = new AdminApi("sk_123");

const res = await adminApi.users.list({ pageSize: 5 });

for (const user of res.users) {
  console.log(user.id, user.displayName);
}
```

See the `examples` directory for more examples.
