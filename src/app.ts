import express, { Request, Response, Express } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

interface SetupConfig {
  PORT: string;
}

export const bootstrapApp = (setupConfig: SetupConfig): Express => {
  const app = express();

  // Express configuration
  app.set('port', setupConfig.PORT);
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(compression());

  app.get('/health-check', (req: Request, res: Response) => {
    console.log('>>', req.baseUrl);

    res.status(200).send('Health');
  });

  return app;
};
