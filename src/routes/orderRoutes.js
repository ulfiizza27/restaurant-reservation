const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/createOrders', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
router.put("/orders/:orderId/status", orderController.updateOrderStatus);

module.exports = router;
