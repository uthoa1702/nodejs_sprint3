const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

const adminController = require('../app/controllers/AdminController')
var multer = require('multer');
var path = require('path');

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/public/images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))

    }
})
var upload = multer({ storage: Storage });
/*
day la router cho phan admin cua PRODUCT
*/
router.post('/save',upload.single('image'), adminController.save)
router.get('/create', adminController.create)
router.get('/list', adminController.list)
router.get('/:_id/update', adminController.update)
router.put('/update/:_id', adminController.updatePut)
router.delete('/delete/:_id', adminController.delete)
//
//
//

router.get('/:slug', productController.detail);
router.get('/', productController.home);


module.exports = router;
