## pre requirement
- replace next-ssr-front (recommend) or add .env.local file.
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
