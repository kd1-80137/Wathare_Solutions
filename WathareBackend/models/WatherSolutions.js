const mongoose = require('mongoose');

const Watharesolutiopns = new mongoose.Schema({
  ts: {
      type:Date,
      required: true,
  },
  machine_status: {
      type: Number,
      required: true
  },
  vibration: {
      type: Number,
  }
}, {
  timestamps: true
});

const WS = mongoose.model('wather_solutions', Watharesolutiopns);
module.exports = WS;