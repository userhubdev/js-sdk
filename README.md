# UserHub JavaScript SDK

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
