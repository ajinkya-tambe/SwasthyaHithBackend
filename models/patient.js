//creating the scema for the patient

//importing the mongoose
const mongoose = require('mongoose');

//creating the schema
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required:true,
        unique: true
    },
    //age
    age: {
        type: Number,
        required: true
    },
    //address
    address: {
        type: String,
        required: true
    }
});

//exporting the schema
module.exports = mongoose.model('patientSchema', patientSchema);
