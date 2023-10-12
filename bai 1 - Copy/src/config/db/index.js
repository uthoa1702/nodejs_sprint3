const mongoose = require('mongoose')
const mysql = require('mysql2')
const connectionMySQL =
     mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'Khongbiet@1998',
         database: 'node_js_dev'
     } )

    // console.log("mySQL connected")

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/node_learning_dev');
        await connectionMySQL.connect((error) => {
            if (error) console.log(error)

            else console.log('success')
        })
        console.log("connected")
    } catch (e) {
        console.log(e)
    }

}





module.exports = {connect: connect, connectionMySQL: connectionMySQL};
