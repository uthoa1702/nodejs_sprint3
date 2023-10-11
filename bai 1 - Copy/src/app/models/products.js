const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Products = new Schema({
        name: {type: String, unique: [true, 'It is already used'], required: [true,'Need to be filled']},
        image: {type: String},
        description: {type: String},
        price: {type: String, required: true,},
        slug: {type: String, slug: 'name'}
    },
    {
        timestamps: true,


    }
);
module.exports = mongoose.model('Products', Products);