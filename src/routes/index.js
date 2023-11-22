const express = require('express');
const router = express.Router();
const authRouter = require('./auth/auth.router');
const visitsRouter = require('./visits/visits.router');
const rolesRouter = require('./roles/roles.router');
const addressesRouter = require('./addresses/addresses.router');
const usersRouter = require('./users/user.router');

router.use('/auth', authRouter);
router.use('/visits', visitsRouter);
router.use('/roles', rolesRouter);
router.use('/addresses', addressesRouter);
router.use('/users', usersRouter);

module.exports = router;