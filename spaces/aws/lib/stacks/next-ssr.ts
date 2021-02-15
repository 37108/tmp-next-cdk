import {
  CachePolicy,
  Distribution,
  LambdaEdgeEventType,
  ViewerProtocolPolicy,
} from '@aws-cdk/aws-cloudfront';
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { Bucket } from '@aws-cdk/aws-s3';
import { Construct, Duration, Stack } from '@aws-cdk/core';
import { join } from 'path';

/**
 * run Next.js on Lambda@edge.
 * and deliver contents from CloudFront.
 */
export async function next(construct: Construct): Promise<Stack> {
  const stack = new Stack(construct, 'next-ssr', {
    stackName: 'next-ssr',
  });

  const bucket = new Bucket(stack, 'next-ssr-static');

  const bff = new Function(stack, 'next-ssr-bff', {
    runtime: Runtime.NODEJS_12_X,
    handler: 'index.handler',
    timeout: Duration.seconds(30),
    memorySize: 1728,
    code: Code.fromAsset(join(__dirname, '../../../next-ssr-bff/dist')),
  });

  const origin = new S3Origin(bucket);

  new Distribution(stack, 'next-ssr-edge', {
    defaultBehavior: {
      origin,
      edgeLambdas: [
        {
          functionVersion: bff.currentVersion,
          eventType: LambdaEdgeEventType.ORIGIN_REQUEST,
          includeBody: true,
        },
      ],
      cachePolicy: new CachePolicy(stack, 'next-ssr-edge-policy', {
        defaultTtl: Duration.minutes(1),
        minTtl: Duration.minutes(1),
        maxTtl: Duration.minutes(1),
        enableAcceptEncodingGzip: true,
        enableAcceptEncodingBrotli: true,
      }),
    },
    additionalBehaviors: {
      '/static/*': {
        origin,
        viewerProtocolPolicy: ViewerProtocolPolicy.HTTPS_ONLY,
      },
    },
  });

  return stack;
}
