const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, "sahci2babashjc32", {
        expiresIn: '30d'
    })
}

module.exports = generateToken