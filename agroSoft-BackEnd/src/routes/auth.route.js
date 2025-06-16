const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser } = require('../controllers/auth.controller');
const { validateFields } = require('../middlewares');

const router = Router();

router.post(
    '/login',
    [
        check('email', 'El correo es obligatorio').notEmpty(),
        check('email', 'El correo no es válido').isEmail(),

        check('password', 'La contraseña es obligatoria').notEmpty(),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),

        validateFields
    ],
    loginUser
);



module.exports = router;
