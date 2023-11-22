const express = require('express');
const router = express.Router();
const addressesController = require('../../controllers/addresses/addresses.controller');
const authenticateJWT = require("../../middleware/auth.middleware");

router.get('/get-addresses', authenticateJWT, addressesController.getAllAddresses);
router.get('/get-address-by-num', authenticateJWT, addressesController.getAddressByNum);

module.exports = router;