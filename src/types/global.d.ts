import { Request as ExpressRequest } from 'express';

declare namespace Express {
  interface Request extends ExpressRequest {
    token?: string;
  }
}

