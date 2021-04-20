'use strict'
// Application Dependencies
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');
const superagent = require('superagent');
const cors = require('cors');


// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');


// Express middleware
// Utilize ExpressJS functionality to parse the body of the request

// Specify a directory for static resources

// define our method-override reference

// Set the view engine for server-side templating

// Use app cors


// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

// app routes here
// -- WRITE YOUR ROUTES HERE --
app.get('/',getHomePage);
app.get('/favorite-quotes', getFavPage);


// callback functions
// -- WRITE YOUR CALLBACK FUNCTIONS FOR THE ROUTES HERE --

function getHomePage(req,res){
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`;
    const sql = `INSERT INTO charactars (name, quote, image, characterDirection) VALUES ($1, $2, $3, $4);`
    const {name, quote, image, characterDirection}= res.body;
    const safeValues = [name, quote, image, characterDirection];
    superagent.get(url).set('User-Agent', '1.0').then(data=>{
        res.render('index', {Characters : Characters});

    });
}

function getFavPage(req,res){
    const sql = `SELECT * FROM charactars WHERE id =$1;`
    const safeValues = 
    superagent.get(sql, safeValues).set('User-Agent', '1.0').then(data=>{
        res.send('favorite-quotes', {Characters:Characters})
    });
}


// helper functions

function Characters (data){
    this.quote = data.quote;
    this.name = data.name;
    this.image = data.image;
    this.characterDirection = data.characterDirection;
}

// app start point
client.connect().then(() =>
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
);
