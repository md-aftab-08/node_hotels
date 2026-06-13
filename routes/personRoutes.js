const express = require("express");
const router = express();

const PORT = 3000;

const Person = require('./../models/Person');

router.use('/', async(res, req) => {
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json('response');
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})

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


router.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = router;