const { Router } = require('express');
const { check } = require('express-validator');
const { createSeeding } = require('../controllers/seeding.controller');
const { validateFields, validateJWT } = require('../middlewares');

const router = Router();

// create
router.post(
    '/create',
    [
        check('seeding_date', 'La fecha de la siembra es obligatoria').notEmpty(),
        check('seeding_date', 'La fecha de la siembra debe ser una fecha válida').isDate(),

        check('location', 'La ubicación es obligatorio').notEmpty(),
        check('location', 'La ubicación debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('cultivation', 'El cultivo es obligatorio').notEmpty(),
        check('cultivation', 'El cultivo debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('used_consumables', 'Los insumos usados son obligatorios').notEmpty(),
        check('used_consumables', 'Los insumos usados deben tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('quantity', 'La cantidad es obligatoria').notEmpty(),
        check('quantity', 'La cantidad debe ser un número').isNumeric(),

        check('photo', 'el nombre de la foto es obligatorio').notEmpty(),
        check('photo', 'El nombre de la foto debe ser un string').isString(),

        validateFields,
        validateJWT
    ],
    createSeeding
);
module.exports = router;