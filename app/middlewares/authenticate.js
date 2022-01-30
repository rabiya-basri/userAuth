const jwt = require('jsonwebtoken')
const User = require('../models/user')
const authenticateUser = (req, res, next) => {
    const token = req.headers('Authorization').split(' ')[1]
    let tokenData
    try {
        tokenData = jwt.verify(token, 'dct123')
        User.findById(tokenData._id)
        .then((user) => {
            req.user = user
            next()
        })
            .catch((e) => {
            res.json(e.message)
        })
    } catch (e) {
        res.json(e.message)
    }
}

// const authorizeUser=()=>{

// }

module.exports = {
    authenticateUser   
}