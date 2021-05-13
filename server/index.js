const express = require('express');
const app = express();
const path = require('path');
const port = 1000;

app.use(express.static('/Users/fredericrosselet/Desktop/rpt27/fec/udemy-proxy-fredrosselet/client/public'));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});