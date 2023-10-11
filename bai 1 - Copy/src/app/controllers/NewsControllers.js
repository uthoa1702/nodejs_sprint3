class NewsControllers {
  // [get] /news
  index(req, res) {
    res.render('news');
  }
  // [get] /:slug
  detail(req, res) {
    res.render('detail');
  }
}
module.exports = new NewsControllers();
