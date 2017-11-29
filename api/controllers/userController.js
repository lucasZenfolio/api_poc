const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify')

exports.home = (req, res) => {
  res.json({ it: 'Hello Zenfolio!'});
};

exports.getAll = async (req, res) => {
  const tests = await Test.find();
  res.json( { message: 'Test', tests });
};

exports.create = async (req, res) => {

 var newUser = await (new User({
    name: req.query.name,
    lastname: req.query.lastname,
    email: req.query.email,
    apihost: process.env.APIHOST
  })).save()
    .catch(function(error){
        console.log(error);
    });

  res.json( { message: 'New User Created!' });
};