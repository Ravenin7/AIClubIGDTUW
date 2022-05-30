const express = require('express');
const app = express();
const path = require('path');
const port = 4004
const teamData = require("./public/JS/team-data")
//view engine setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/team', (req, res) => {
    res.render('team', teamData);
})

app.get('/events', (req, res) => {
    res.render('events');
})

// app.get('/tad', (req, res) => {
//     res.render('tad');
// })

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`)
})