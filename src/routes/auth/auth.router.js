const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth/auth.controller');
const authenticateJWT = require("../../middleware/auth.middleware");

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/logout', authController.logout);
router.get('/is-auth', authenticateJWT, (req, res) => {
    res.json({ message: 'Ruta protegida, acceso autorizado', user: req.user });
});
module.exports = router;