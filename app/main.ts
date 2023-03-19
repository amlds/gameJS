const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public');

const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

dotenv.config();

const app = express();
app.use(connectLivereload());

const port = process.env.PORT || 3000;

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
