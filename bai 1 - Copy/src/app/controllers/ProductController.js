const productModel = require('../models/products')
const Courses = require('../models/products')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')


class ProductController {
    detail(req, res) {
        productModel.findOne({name: req.params.slug})
            .then(
                product => {
                    console.log("ok roi : " + req.params.slug)
                    console.log(product)
                    if (product) {
                        res.render("detail", {
                            foundItem: mongooseToObject(product)
                        })
                    } else {
                        res.send('404')
                    }
                }
            )
            .catch(err => {

                console.log(err)
            })

    }

    home(req, res) {


        const getCourse = async () => {
            try {
                const items = await Courses.find({})
                return items;
            } catch (e) {

            }
        }
        getCourse().then((foundItems) => {
            res.render('home', {
                foundItems: multipleMongooseToObject(foundItems)
            })
            // res.json(foundItems)
            console.log(foundItems)
        }).catch((err) => {
            console.log("loi roi em oi: ")
            console.log(err)
        })


        // res.render('home');
    }


}

module.exports = new ProductController();