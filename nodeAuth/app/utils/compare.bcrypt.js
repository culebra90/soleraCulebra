const bcrypt = require('bcrypt');

const comparePass = (param1, param2) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(param1, param2, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

module.exports = comparePass;