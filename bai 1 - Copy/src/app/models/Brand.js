const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Brand = new Schema({
        name: {type: String, unique: [true, 'It is already used'], required: [true,'Need to be filled']},
    });
module.exports = mongoose.model('brands', Brand);