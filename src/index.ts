import express from 'express';
import config from '@config/index';

const main = (): void => {
  const app = express();

  app.listen(8000, () => {
    console.log('server is listening at http://localhost:8000');
  });
};

main();
