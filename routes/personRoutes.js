const express = require("express");
const router = express.Router();

const Person = require('./../models/Person');

router.post('/', async(req, res) => {
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})

router.post("/", async(req, res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response =  await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});

module.exports = router;