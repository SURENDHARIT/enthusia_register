const mongoose = require("mongoose");

const NewGroupEventSchema = new mongoose.Schema({
  rid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  name1: {
    type: String,
    required: true,
  },
  regno1: {
    type: String,
    required: true,
  },

  dept1: {
    type: String,
    required: true,
  },

  mobile1: {
    type: String,
    required: true,
  },
  name2: {
    type: String,
    required: true,
  },
  regno2: {
    type: String,
    required: true,
  },

  dept2: {
    type: String,
    required: true,
  },

  mobile2: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  membersCount: {
    type: Number,
    required: true,
  },
  members: {
    type: String,
  },
});

module.exports = mongoose.model("NewGroupEvent", NewGroupEventSchema);
