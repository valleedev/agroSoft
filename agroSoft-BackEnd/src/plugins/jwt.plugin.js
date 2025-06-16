const jwt = require('jsonwebtoken');


const generateJWT = ( uid, name ) => {

    return new Promise((resolve, reject) => {
        
        const payload = { uid, name };

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) =>  {

            if(err) {
                console.log(err)
                reject('No se pudo crear el token');
            }

            resolve( token );

        })
    })
}


const verifyJWT = ( token ) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_JWT_SEED, (err, decoded) => {
            if (err) {
                console.log(err);
                reject('Token no válido');
            }
            resolve(decoded); // Contiene uid y name
        });
    });
};

module.exports = {
    generateJWT,
    verifyJWT
};