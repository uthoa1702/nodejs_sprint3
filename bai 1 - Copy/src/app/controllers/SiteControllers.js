const Courses = require('../models/products')
const {multipleMongooseToObject} = require('../../util/mongoose')
const productModel = require('../models/products')

class SiteControllers {
  home(req, res) {

// Courses.find({}, function(err, course)  {
//   if (!err){
//      res.json(course);
//   }
//   else {
//       res.status(400).json({error:"erroorr"})
//   }
// })


    const getCourse = async () => {
      try {
        const items = await Courses.find({})
        return  items;
      }catch (e) {

      }
    }
    getCourse().then((foundItems)=>{
      res.render('home', {
        foundItems: multipleMongooseToObject(foundItems)
      })
      // res.json(foundItems)
      console.log(foundItems)
    }).catch((err)=>{
      console.log("loi roi em oi: " )
      console.log(err)
    })



    // res.render('home');
  }

  list(req, res) {
    res.render('list');
  }

  detail(req, res){
    productModel.findOne({name: req.params.slug})
        .then(
            product => {
              console.log("ok roi : " + req.params.slug)
              res.render("detail", product)
            }
        )
        .catch(err => {
          console.log(err)})

  }
}
module.exports = new SiteControllers();
