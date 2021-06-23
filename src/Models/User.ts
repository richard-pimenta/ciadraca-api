import mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {

    name: { type: String, require: true },
    lastname: { type: String, require: true },
    username: { type: String, unique: true, require: true, lowercase: true },
    password: { type: String, require: true, select: false },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'UserLogin' }
);
export const UserModel = mongoose.model('UserLogin', userSchema,'UserLogin');
