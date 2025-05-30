const Meja = require('../models/mejaModel');

const createMeja = (req, res) => {
  const { tableNumber, capacity } = req.body;
  return Meja.create({ tableNumber, capacity })
    .then(meja => {
      res.status(201).json({
        success: true,
        data: meja
      });
    })
    .catch(error => {
      res.status(400).json({
        success: false,
        error: error.message
      });
    });
};

const getAllMeja = (req, res) => {
  return Meja.find()
    .then(meja => {
      res.status(200).json({
        success: true,
        data: meja
      });
    })
    .catch(error => {
      res.status(400).json({
        success: false,
        error: error.message
      });
    });
};

const reserveMeja = (req, res) => {
  const { tableNumber } = req.params;
  const { customerName } = req.body;
  // Validasi nama pelanggan
  if (!customerName) {
    return res.status(400).json({
      success: false,
      error: 'Nama pelanggan harus diisi'
    });
  }
  return Meja.findOneAndUpdate(
    { tableNumber, status: 'available' },
    { status: 'reserved', customerName },
    { new: true }
  )
    .then(meja => {
      if (!meja) {
        return res.status(404).json({
          success: false,
          error: 'Meja tidak tersedia'
        });
      }
      res.status(200).json({
        success: true,
        data: meja
      });
    })
    .catch(error => {
      res.status(400).json({
        success: false,
        error: error.message
      });
    });
};

const cancelReservation = (req, res) => {
  const { tableNumber } = req.params;

  return Meja.findOneAndUpdate(
    { tableNumber, status: 'reserved' },
    {
      status: 'available',
      customerName: '',
      updatedAt: Date.now()
    },
    { new: true }
  )
    .then(meja => {
      if (!meja) {
        return res.status(404).json({
          success: false,
          error: 'Table not found or not currently reserved'
        });
      }
      res.status(200).json({
        success: true,
        message: `Reservation for table ${tableNumber} has been cancelled`,
        data: meja
      });
    })
    .catch(error => {
      res.status(400).json({
        success: false,
        error: error.message
      });
    });
};


module.exports = {
  createMeja,
  getAllMeja,
  reserveMeja,
  cancelReservation
};


