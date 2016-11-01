// dependancies from npm
const express = require('express');
const ejs = require('ejs');

// Initilize our app
const app = express();

// setting views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// adding route to app that renders the index view
app.get('/', function(req, res, next) {
    res.render('index.ejs', {
      greeting: "Hi, I'm Rey and here's my Bio.",
      brief_intro: "Currently working in Accounting/Finance field but soon transitioning to Jr. Software Developer.",
      header_one: "My Skills:",
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      header_two: "My Hobbies:",
      hobbies: ['Hiking', 'Traveling', 'Horseback Riding', 'Tough Mudder']

   });
 });

// set up our server
const port = 3000;
app.listen(port, () => console.log('Server listening on: ${port}'));
