const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  isOccupied: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['available', 'reserved'],
    default: 'available'
  },
  customerName: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Meja', tableSchema);

