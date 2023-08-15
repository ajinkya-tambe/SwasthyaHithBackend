const express = require('express');


const router = express.Router();

//importing the controller
const patients = require('../models/patient');

//simple api to get
router.get('/', async (req, res) => {
    try {
        const patient = await patients.find(); 
        res.send(patient);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//creating post request for patients
router.post('/', (req, res) => {

    const Patient = new patients({
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
        address: req.body.address
    });

    try {
        
        const addPatient = Patient.save();
        res.status(201).json(addPatient);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports=router;