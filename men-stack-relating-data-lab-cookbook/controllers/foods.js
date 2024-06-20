const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

//routes go here
//INDEX
router.get('/', async (req, res) => {
    try {
       const user = await User.findById(req.session.user._id);
    //    res.locals.pantry = user.pantry;
        res.render('foods/index.ejs', {
            pantry: user.pantry
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// NEW
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

// CREATE
router.post('/', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        user.pantry.push(req.body);
        await user.save();
        res.redirect(`/users/${ user._id }/foods`);     
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// SHOW
router.get('/:itemid', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const food = user.pantry.id(req.params.id);
        res.render('foods/show.ejs', {
            food: food,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// EDIT
router.get('/:itemid/edit', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const food = user.pantry.id(req.params.id);
        res.render('foods/edit.ejs', {
            food: food,
        })
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// UPDATE
router.put('/:itemid', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const food = user.pantry.id(req.params.id);
        food.set(req.body);
        await user.save();
        res.redirect(`/users/${ user._id }/foods/${ food._id }`);
    } catch (error) {
        console.log(error);
        res.redirect('/foods');
    }
});

// DELETE
router.delete('/:itemid', async (req, res) => {
    try {
       const user = await User.findById(req.session.user._id);
        user.pantry.id(req.params.id).deleteOne();
        await user.save();
        res.redirect('/'); 
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;