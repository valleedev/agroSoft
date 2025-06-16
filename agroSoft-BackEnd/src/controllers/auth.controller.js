const { response } = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { generateJWT } = require('../plugins/jwt.plugin');


const loginUser = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { correo:email } });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario registrado con ese Email'
            });
        }
        // Confirmar contraseña
        const validPassword = bcrypt.compareSync(password, user.contrasena);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        // Generar JWT
        const token = await generateJWT(user.id, user.nombres);

        res.json({
            ok: true,
            uid: user.id,
            user,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};


module.exports = {
    loginUser,
}