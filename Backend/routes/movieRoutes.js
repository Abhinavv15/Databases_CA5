const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.post('/', async (req,res) => {
    try {
        const {title , genre , userId} =req.body;
        const newMovie = new Movie({ title , genre , userId});
        await newMovie.save();
        res.status(201).json({ message: 'Movie added', movie: newMovie});
    } catch (error) {
        re.status(500).json({ error: 'Failed to add movie'});
    }
})

module.exports = router;