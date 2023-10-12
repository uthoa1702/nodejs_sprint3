const productModel = require('../models/products')
const productTypes = require('../models/ProductTypes')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const multer = require('multer');
var upload = multer({ dest: 'src/public/images' });
const path = require('path');
const db = require('../../config/db/index')
class AdminController {

    list(req, res) {
               productModel.find().populate('producttypes').exec().then((items) => {
                   console.log(items)
                   res.render('list', {
                           foundItems: multipleMongooseToObject(items)
                       }
                   )

                   // res.json(items)

               }).catch((e) => {
                   console.log(e)
               }
        )
    }




    // ket noi voi mySQL
    // list(req, res) {
    //
    //         db.connectionMySQL.query('SELECT * FROM products', (err, foundItems, fields) => {
    //             if (err) throw err
    //             console.log(foundItems)
    //             res.render('list', {foundItems: foundItems})
    //
    //
    //         })
    // }




    listJson(req, res) {
        const getCourse = async () => {
            try {
                const items = await productModel.find({})
                return items;
            } catch (e) {
                console.log(e)
            }
        }
        getCourse().then((items) => {
            res.json(items)

        }).catch((e) => {
                console.log(e)
            }
        )
    }

    create(req, res) {
        res.render('create')
    }
    update(req, res) {

        productModel.findOne({_id: req.params._id})
            .then(
                product => {
                    // console.log("ok roi : " + req.params.slug)
                    console.log(product)
                    if (product) {
                        console.log(product)
                        res.render("update", {
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
    updatePut(req, res, next){
        // res.json(req.body)
        productModel.updateOne({_id: req.params._id}, req.body).then(() => {
            res.redirect('/list')
        }).catch(next);
    }



    save (req, res, next) {

            console.log("da vao post")
            // res.json(req.body)
            const product = new productModel({
                name: req.body.name,
                image:  req.file ? "/images/" + req.file.filename : ''   ,
                description: req.body.description,
                price: req.body.price,
            })
            product.save().then(() => {
                res.redirect("/list")

            }).catch((e) => {
                console.log(e.errors)
                let validationError = {};
                for (let field in e.errors){
                    validationError[field] = e.errors[field].message
                }
                console.log(validationError)
                res.render('create',{
                    validate: validationError
                })
            })
        }
    saveJson (req, res, next) {
        console.log("da vao post")
        console.log("day la req:   " + req.body)
        // res.json(req.body)
        const product = new productModel({
            name: req.body.name,
            image: "/images/" + req.file ? ''  :  req.file.filename ,
            description: req.body.description,
            price: req.body.price,
        })
        product.save().then(() => {
            console.log(req.body)

        }).catch((e) => {
            console.log(e.errors)
            let validationError = {};
            for (let field in e.errors){
                validationError[field] = e.errors[field].message
            }
            console.log(validationError)
            res.render('create',{
                validate: validationError
            })
        })
    }



    delete(req, res, next){
        productModel.deleteOne({_id: req.params._id}).then(() => {
            res.redirect('/list')
        }).catch(next)
    }
}


module.exports = new AdminController();