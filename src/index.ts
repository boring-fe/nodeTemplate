import { Express } from 'express';
import { bootstrapApp } from './app';
import https from 'https';
import fs from 'fs';

const bootstrapHttps = (app: Express): void => {
  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
    .listen(3000, function () {
      console.log(
        ' App is running at https://localhost:%d in %s mode',
        app.get('port'),
        app.get('env'),
      );
      console.log('  Press CTRL-C to stop\n');
    });
};

const index = (): void => {
  const PORT = process.env.PORT || '3000';
  const app = bootstrapApp({PORT});

  bootstrapHttps(app);
};

index();
