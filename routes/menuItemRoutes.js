const express = require("express");
const router = express();

const menuItem = require('./../models/menuItem');

router.post("/", async(res, req) => {
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

router.post("/", async(res, req) => {
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