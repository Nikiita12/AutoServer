const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const { verifyToken } = require('../utils/jwtUtils');

const router = express.Router();

router.get('/', verifyToken, vehicleController.getVehicleData);
router.post('/update', verifyToken, vehicleController.updateVehicleData);

module.exports = router;