// const express = require('express');
// const app = express();
// const path = require('path');
// const axios = require('axios');
const cors = require('cors');
// const morgan = require('morgan');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// app.use(morgan('dev'));

// app.use(express.static('../client/public'));
// const PORT = 5000;

const express = require('express');
// const httpReq = require('axios');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'client', 'public', 'proxy.html'));
});

// app.get('/reviews/item', (req, res) => {

//   let id = req.query.courseId;
//   console.log(id);
//   httpReq.get(`http://localhost:2712/reviews/item?courseId=${id}`,
//     {
//       params: req.query,
//       headers: req.headers
//     })
//     .then( (req) => {
//       // res.status(200).send(req.data);
//       console.log(req.data);
//       res.send('hi');

//     })
//     .catch( (error) => {
//       res.status(501).send(error);
//     });

// });

// const OVERVIEW = 'http://localhost:3000';
// const COURSE_CONTENT = 'http://localhost:9000';
// const SIDEBAR = 'http://localhost:3004';
// const REVIEWS = 'http://localhost:2712';

// const reviewProxy = createProxyMiddleware({target: REVIEWS});


// app.get('/', (req, res) => {
//   console.log(req.query.courseId);
//   id = req.query.courseId;
//   return reviewProxy.call(reviewProxy, req, res);
//   res.send(id);

// });

// app.use('/reviews',
//   createProxyMiddleware({
//     target: REVIEWS,
//     changeOrigin: true
//   })
// );

app.listen(PORT, () => {
  console.log(`Proxy server listening at http://localhost:${PORT}`);
});


//   axios.get(`http://127.0.0.1:2712/reviews/item?courseId=${id}`, {
//     params: req.query,
//     headers: req.headers
//   })
//     .then((response) => {
//       console.log(response.data);
//       res.send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// axios.get(`http://127.0.0.1:2712/reviews/item?courseId=${id}`, {
//   params: req.query,
//   headers: req.headers
// })
//   .then((response) => {
//     console.log(response.data);
//     res.send(response.data);
//   });






// app.use('/overview',
//   createProxyMiddleware({
//     target: OVERVIEW,
//     changeOrigin: true
//   })
// );

// app.use('/course/item',
//   createProxyMiddleware({
//     target: COURSE_CONTENT,
//     changeOrigin: true
//   })
// );

// app.use('/sidebar',
//   createProxyMiddleware({
//     target: SIDEBAR,
//     changeOrigin: true
//   })
// );






