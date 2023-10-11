const mongoose = require('mongoose')


async function connect() {
 try {
  await mongoose.connect('mongodb://127.0.0.1:27017/node_learning_dev');
  console.log("connected")
 }catch (e) {
  console.log(e)
 }

}

module.exports = {connect};
