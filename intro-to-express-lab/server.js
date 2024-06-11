// EXERCISE 1: Be Polite, Greet The User

const express = require('express');

const server = express()

server.listen(3000);

server.get('/greetings/:name', (req, res) => {
    res.send(`Hello there, ${ req.params.name}!`);
});

// EXERCISE 2: Rolling the Dice

server.get('/roll/:number', (req, res) => {
    res.send(`You rolled a ${ req.params.number}.`);
});

// EXERCISE 3: I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

server.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const item = collectibles[index];
    // if (index > collectibles.length) {
    //     res.send('This item is not yet in stock. Check back soon!')
    // }; NEED TO FIX THIS BIT
    res.send(`So, you want the ${item.name}? For ${ item.price } it can be yours!`);
    
});

// EXERCISE 4: Filter Shoes by Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

server.get('/shoes', (req, res) => {

    let filteredShoes = shoes;

    if (req.query['minPrice']) {
        const minPrice = parseFloat(req.query['minPrice']);
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    };
    if (req.query['maxPrice']) {
        const minPrice = parseFloat(req.query['maxPrice']);
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= maxPrice);
    };
    if (req.query['type']) {
        const minPrice = parseFloat(req.query['type']);
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    };

    res.send(filteredShoes);
});

