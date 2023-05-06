var express = require('express');
var router = express.Router();

const CarController = require('../controller/Car');

const isSuperAdmin = require('../middleware/isSuperAdmin')
const isAdmin = require('../middleware/isAdmin')
const isMember = require('../middleware/isMember')

const authAdmin = require('../middleware/authAdmin')
const authRegistered = require('../middleware/authRegistered')

// Endpoint Create (C)
router.post('/add-car', authAdmin, CarController.addCar);

// Endpoint Read (R)
router.get('/', authAdmin, CarController.getAllCars);
router.get('/true', authRegistered, CarController.getCarsTrue);
router.get('/false', authAdmin, CarController.getCarsFalse);

// Endpoint Update (U)
router.put('/update/:id', authAdmin, CarController.updateCar);

// Endpoint Delete (D)
router.post('/delete/:id', authAdmin, CarController.softDeleteCar);
router.delete('/destroy/:id', authAdmin, CarController.destroyCar);

module.exports = router;