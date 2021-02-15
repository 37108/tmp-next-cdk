#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import 'source-map-support/register';
import { next } from '../lib/stacks';

const app = new App();

(async function (): Promise<void> {
  await next(app);
})();
