const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3
  },
  habits: { type: Array, required: false}
  //Add total of habits and total of done habits?
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;