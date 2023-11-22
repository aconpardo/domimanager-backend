const express = require('express');
const router = express.Router();
const rolesController = require('../../controllers/roles/roles.controller');
const authenticateJWT = require("../../middleware/auth.middleware");

router.get('/get-roles', authenticateJWT, rolesController.getAllRoles);

module.exports = router;