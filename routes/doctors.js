const express = require('express')
const router = express.Router();
const Doc = require('../models/doctor');

//getting all the clients

router.get('/', async(req, res) => {
    try {
        const doctors = await Doc.find(); 
        res.send(doctors);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


router.post('/', async(req, res) => {
    const doc = new Doc({
        name: req.body.name,
        qualification: req.body.qualification,
        regNumber: req.body.regNumber,
        hospitalName: req.body.hospitalName,
        hospitalAdr: req.body.hospitalAdr,
        phone: req.body.phone
    })
    
    try {
        
        const addDoctor = await doc.save();
        res.status(201).json(addDoctor);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})


module.exports = router;