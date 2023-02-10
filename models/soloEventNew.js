const mongoose = require("mongoose");

const NewSoloEventSchema = new mongoose.Schema({
  rid: {
    type: String,
    required: true,
    unique: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  regno: {
    type: String,
    required: true,
  },

  dept: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("NewSoloEvent", NewSoloEventSchema);
