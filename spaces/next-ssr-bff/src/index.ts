import serverlessExpress from '@vendia/serverless-express';
import express, { Express, Request, Response } from 'express';
import next from 'next';

export function build(): Express {
  const app = next({
    // dev: !!process.env.PRODUCTION ?? true,
    dir: './',
  });

  const handler = app.getRequestHandler();
  const server = express();
  server.all('*', (req: Request, res: Response) => {
    return handler(req, res);
  });
  return server;
}

const server = build();
exports.handler = serverlessExpress({ app: server });
