const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users/user.controller');
const authenticateJWT = require("../../middleware/auth.middleware");

router.put('/update', authenticateJWT, usersController.updateUser);
router.delete('/delete', authenticateJWT, usersController.deleteUser);
router.get('/get-user-by-field', authenticateJWT, usersController.getUserByAny);



module.exports = router;