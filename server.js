const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://swasthyahith:hyderabad@cluster0.iwz5zbs.mongodb.net/?retryWrites=true&w=majority', {useNewURLParser: true});
const db = mongoose.connection;

db.on('error', (error)=>{console.error(error)});
db.once('open', ()=>{console.log("Connected to the database")});

app.use(express.json());

//For Doctor
const docRouter = require('./routes/doctors');
app.use('/doctors', docRouter);

// //For Patients
const patientRouter = require('./routes/patients');
app.use('/patients', patientRouter);


app.listen(3000, () => {
    console.log("Server started!");
});