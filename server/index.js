const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 6001;
const host = process.env.HOST || 'localhost';

app.use('/', express.static(path.join(__dirname, '..', 'client', 'public')));

app.use(cors());

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'proxy.html'));
});

app.listen(port, () => {
  console.log(`Proxy server listening at ${port}`);
});