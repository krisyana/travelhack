const bcrypt = require('bcryptjs');

function hash(password) {
    return bcrypt.hashSync(password, 10);
}

function compare(password, hashedpasword) {
    return bcrypt.compareSync(password, hashedpasword)
}

module.exports = { hash, compare }