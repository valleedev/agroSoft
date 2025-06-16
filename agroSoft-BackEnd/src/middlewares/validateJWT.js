const { verifyJWT } = require('../plugins/jwt.plugin');
const { User } = require('../models');

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({ msg: 'No hay token en la petición' });
    }

    try {
        const { uid, name } = await verifyJWT(token);

        const user = await User.findByPk(uid);
        if (!user) {
            return res.status(401).json({ msg: 'Token no válido - usuario no existe' });
        }

        req.uid = uid;
        req.name = name;
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token no válido' });
    }
};

module.exports = {
    validateJWT,
};