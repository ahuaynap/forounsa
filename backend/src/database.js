const mongoose = require('mongoose');

const URI = 'mongodb://localhost/forounsa';
const URI2 = 'mongodb+srv://foroDB:forouniversitario@forouniversitario-iangf.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});