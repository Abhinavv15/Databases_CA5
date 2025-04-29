const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req,res) => {
    try {
        const {username , email , password} =req.body;
        const newUser = new User({ username ,email,password});
        await newUser.save();
        res.status(201).json({ message: 'User registerd', user: newUser});
    } catch (error) {
        re.status(500).json({ error: 'Registeration failed'});
    }
})

module.exports = router;