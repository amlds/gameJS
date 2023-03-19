const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get(
  '/',
  (
    req: {send: (arg0: string) => void},
    res: {send: (arg1: string) => void}
  ) => {
    res.send('Hello World!');
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
