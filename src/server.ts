import { bootstrapApp } from './app';

const bootstrap = (): void => {
  const PORT = 3000;
  const app = bootstrapApp({PORT});
  app.listen(PORT, () => {
    console.log(
      ' App is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env'),
    );
    console.log('  Press CTRL-C to stop\n');
  });
};

bootstrap();
