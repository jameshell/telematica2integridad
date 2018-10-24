var crypto = require('crypto');

module.exports.md5 = (string) => {
    //Esto devuelve el hash en su totalidad
    return crypto.createHash('md5').update(string).digest('hex');
}

module.exports.sha256 = (string) => {
    //Esto devuelve el hash en su totalidad
    return crypto.createHash('sha256').update(string).digest('hex');
}

module.exports.sha256withoutDigest = (string) => {
    //Esto devuelve un JSON
    return crypto.createHash('sha256').update(string);
}

module.exports.md5withoutDigest = (string) => {
    //Esto devuelve un JSON
    return crypto.createHash('md5').update(string);
}