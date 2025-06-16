const { Router } = require('express');
const { check } = require('express-validator');
const { createTool, getTool, deleteTool, updateTool } = require('../controllers/tool.controller');
const { validateFields, validateJWT } = require('../middlewares');

const router = Router();

// create
router.post(
    '/create',
    [
        check('reference', 'La referencia es obligatoria').notEmpty(),
        check('reference', 'La referencia debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('name', 'El nombre es obligatorio').notEmpty(),
        check('name', 'El nombre debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('status', 'El estado es obligatorio').notEmpty(),

        check('buy_date', 'la fecha de compra es obligatorio').notEmpty(),
        check('buy_date', 'la fecha de compra debe ser una fecha válida').isDate(),

        validateFields,
        validateJWT
    ],
    createTool
);

router.get( '/',  [ validateJWT ],  getTool );
router.delete( '/:id',  [ validateJWT ],  deleteTool );

router.put(
    '/update/:id',
    [
        check('reference', 'La referencia es obligatoria').notEmpty(),
        check('reference', 'La referencia debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('name', 'El nombre es obligatorio').notEmpty(),
        check('name', 'El nombre debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('status', 'El estado es obligatorio').notEmpty(),

        check('buy_date', 'la fecha de compra es obligatorio').notEmpty(),
        check('buy_date', 'la fecha de compra debe ser una fecha válida').isDate(),

        validateFields,
        validateJWT
    ],
    updateTool
);


module.exports = router;