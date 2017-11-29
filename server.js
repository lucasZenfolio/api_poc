const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE,  { useMongoClient: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});

//import the model (or more if you have)
require('./api/models/User');

const app = require ('./app.js');

app.set('port', process.env.PORT || 7777 );

const server = app.listen(app.get('port'), ()=> {
    console.log(`Zenfolio API running → PORT ${server.address().port}`);
});