import App from './app';
import config from './ormconfig';
import { createConnection } from 'typeorm';
import PostController from './controllers/postController';

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new PostController(),
    ],
  );
  app.listen();
})();