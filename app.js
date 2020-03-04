const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()

//establish a connection to the mongo db container
mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true}, function(err) {
  if(err) {
    console.log('error db connection failed: ' + err)
  }
  else {
    console.log('Connection to DB successful')
  }
});



//test to show base path works
app.get('/', (req, res) => res.send("Hello new"));

//set up port to listen on
app.listen(3000, () => {
    console.log("Now listening on port 3000");
})