const { Router } = require('express');

const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const collaboratorRoutes = require('./collaborator.route');
const toolRoutes = require('./tool.route');
const seedingRoutes = require('./seeding.route');


const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/collaborators', collaboratorRoutes);
router.use('/tools', toolRoutes);
router.use('/seedings', seedingRoutes);

module.exports = router