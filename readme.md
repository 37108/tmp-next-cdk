## pre requirement
- replace next-ssr-front (recommend) or add .env.local file.
  - make sure add dependencies on both of next-ssr-bff and next-ssr-front
- region **must** be us-east-1 or rewrite Lambda Function as [cloudfront.experimental.EdgeFunction](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-cloudfront-readme.html#lambdaedge)

## build

```bash
$ yarn install
$ yarn workspace next-ssr-bff build
```

## deploy

```bash
$ yarn workspace aws deploy

# replace <BUCKET_NAME> on `spaces/next-ssr-bff/package.json` as real one
$ yarn workspace next-ssr-bff deploy:static
```

## development
use `next dev` for development.  
if you want to see server's behavior, overwrite `/spaces/next-ssr-bff/src/index.ts` and run this file.

```typescript
// ...
const server = build();
server.listen(3000, () => {console.log('running')});
```

```bash
$ yarn workspace next-ssr-bff build
$ yarn ts-node spaces/next-ssr-bff/src/index.ts
```