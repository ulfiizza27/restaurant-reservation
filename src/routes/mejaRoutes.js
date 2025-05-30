const express = require('express');
const router = express.Router();
const mejaController = require('../controllers/mejaController');

router.post('/createMeja', mejaController.createMeja);
router.get('/meja', mejaController.getAllMeja);
router.put('/meja/:tableNumber/reserve', mejaController.reserveMeja);
router.put("/meja/:tableNumber/cancel", mejaController.cancelReservation);

module.exports = router;

