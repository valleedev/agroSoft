const { Router } = require('express');
const { check } = require('express-validator');
const { createCollaborator, getCollaborators, deleteCollaborator, updateCollaborator } = require('../controllers/collaborator.controller');
const { validateFields, validateJWT } = require('../middlewares');

const router = Router();

// create
router.post(
    '/create',
    [
        check('identification', 'El número de identificación es obligatorio').notEmpty(),
        check('identification', 'El número de identificación debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('name', 'El nombre es obligatorio').notEmpty(),
        check('name', 'El nombre debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('charge', 'El cargo es obligatorio').notEmpty(),

        check('contact', 'El número de contacto es obligatorio').notEmpty(),
        check('contact', 'El número de contacto debe ser un número').isNumeric(),

        validateFields,
        validateJWT
    ],
    createCollaborator
);

router.get( '/',  [ validateJWT ],  getCollaborators );
router.delete( '/:id',  [ validateJWT ],  deleteCollaborator );

router.put(
    '/update/:id',
    [
        check('identification', 'El número de identificación es obligatorio').notEmpty(),
        check('identification', 'El número de identificación debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('name', 'El nombre es obligatorio').notEmpty(),
        check('name', 'El nombre debe tener mínimo 2 caracteres').isLength({ min: 2 }),

        check('charge', 'El cargo es obligatorio').notEmpty(),

        check('contact', 'El número de contacto es obligatorio').notEmpty(),
        check('contact', 'El número de contacto debe ser un número').isNumeric(),

        validateFields,
        validateJWT
    ],
    updateCollaborator
);

module.exports = router;