
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ruben:forouniversitario@cluster0-iwb7a.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("forounsa").collection("devices");
  // perform actions on the collection object
  client.close();
});
