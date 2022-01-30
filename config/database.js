const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://localhost:27017/user-auth')
        .then(() => {
        console.log('connected todb')
        })
        .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDb