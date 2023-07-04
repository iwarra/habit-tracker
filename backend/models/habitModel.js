const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitSchema = new Schema({
  name: {type: String, required: true},
  checked: {type: Boolean, required: true},
  category: {type: String, required: false},
  color: {type: String, required: false},
  icon: {type: String, required: false},
  repetition: {type: Number, required: true},
  monthlyTotal: {type: Number, required: true}
}, {
  timestamps: true,
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;