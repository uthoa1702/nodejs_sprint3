const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const ProductTypes = new Schema({
        name: {type: String, required: [true,'Need to be filled']},
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('producttypes', ProductTypes);