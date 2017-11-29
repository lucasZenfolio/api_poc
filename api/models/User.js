const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
    type: String,
    trim: true
  },
  lastname:{
    type: String,
    trim: true
  },
  email:{
    type: String,
    trim: true,
    unique: true
  },  
  apihost:{
    type: String,
    trim: true
  }  
});

module.exports = mongoose.model('User', userSchema);