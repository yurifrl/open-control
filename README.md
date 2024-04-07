# Open Control

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reference

- https://ui.shadcn.com
- https://nextjs.org/docs/app/building-your-application/routing
- https://github.com/Kuzma02/NextJS14-NextAuth-Login-And-Register
- https://authjs.dev
- https://github.com/shadcn-ui/ui/blob/main/apps/www/app/(app)/examples
- https://tailwindui.com/all-access

## Things

```
curl https://proxy.open-control.orb.local:4441/v1/auth/ \
    --cacert hack/certs/server.crt \
    -H 'Content-Type: application/json' \
    -d '{"username":"admin","password":"admin"}'
```

mkcert -key-file hack/certs/server.key -cert-file hack/certs/server.crt proxy.open-control.orb.local 