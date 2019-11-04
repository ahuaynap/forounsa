const mongoose = require('mongoose');

const URI = 'mongodb://localhost/forounsa';
const URI2 = 'mongodb+srv://ruben:forouniverio@cluster0-iwb7a.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then( db => console.log('DB is connected'))
    .catch( err => console.error(err));





/*
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://ruben:forouniversitario@cluster0-iwb7a.gcp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("forounsa").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/