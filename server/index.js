const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 6001;

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'proxy.html'));
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});