const mongoose = require('mongoose');

const PollSchema = mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  options: {
    type: [OptionSchema],
    required: true,
  },
});

const OptionSchema = mongoose.Schema({
  option: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Poll", PollSchema);