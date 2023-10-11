const newsRouter = require('./news');
// const siteRouter = require('./site');
const productRouter = require('./product');
const adminRouter = require('./admin');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/json', adminRouter);
  // app.use('/admin', adminRouter);
  // app.use('/', siteRouter);
  app.use('/', productRouter);

}
module.exports = route;
