// THIS IS WHERE THE 5 CRUD OPERATIONS GO
// POST = create a new track
// GET = (index) list all tracks
// GET = (show) get a single track
// PUT = update a track
// DELETE = delete a track

const Track = require('../models/track');
const express = require('express');
const router = express.Router();

// create
router.post('/', async (req, res) => {
    try {
        // create a new track with the data from req.body
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// index
router.get('/', async (req, res) => {
    try {
        const foundTracks = await Track.find({});
        res.status(200).json(foundTracks);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});

// show 
router.get('/:id', async (req, res) => {
    try {
        // Add query to find a single track
        const foundTrack = await Track.findById(req.params.id);
        if (!foundTrack) {
            return res.status(404).json({ message: 'track not found'});
        }
        res.status(200).json(foundTrack);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// update
router.put('/:id', async (req, res) => {
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updatedTrack) {
            return res.status(404).json({ message: 'track not found'});  //means resource not found now - sends message straight away
        }
        res.json(updatedTrack);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    } 
});

// delete
router.delete('/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id);
        if (!track) {
            return res.status(404).json({ message: 'track not found'});
        }
        res.json(track);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
