const mongoose = require('mongoose');


//connect to DB
// u01hZm0Q16jaN5cD
mongoose.connect('mongodb+srv://apotikartanay:Tanay@123@wathare.bcpphrz.mongodb.net/?retryWrites=true&w=majority&appName=wathare', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});
