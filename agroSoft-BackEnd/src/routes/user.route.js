const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, } = require('../controllers/user.controller');
const { validateFields, validateJWT } = require('../middlewares');

const router = Router();

// create
router.post(
    '/create',
    [
        check('nombres', 'El nombre es obligatorio').notEmpty(),
        check('nombres', 'El nombre debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('contrasena', 'La contraseña es obligatoria').notEmpty(),
        check('contrasena', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),

        check('correo', 'El correo es obligatorio').notEmpty(),
        check('correo', 'El correo no es válido').isEmail(),

        validateFields,
    ],
    createUser
);
module.exports = router;