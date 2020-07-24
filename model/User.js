const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
});

userSchema.plugin(encrypt, {
  secret: process.env.SECRET,
  encryptedFields: ['password'],
});

module.exports = mongoose.model('User', userSchema);
