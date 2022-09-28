import mongo from "./config/mongo.js"
import express from "express"
import hbs from "express-handlebars"
import fetch from "node-fetch"
import { engine } from 'express-handlebars';
import router from './config/formController.js';

const PORT = 8000
const app = express()
const url = "https://www.breakingbadapi.com/api/characters"


app.engine('hbs', hbs.engine({ extname: "hbs"}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"))


app.get('/', (req, res) => {
        res.render('home')
        
});


app.use('/', router)


app.get('/infoChar', (req, res) => {
        fetch(url)
        .then(resp => resp.json())
        .then(characters => res.render('infoChar', {characters}))
})

app.get('/partials/characters', (req, res) => {
        res.render('partials/characters')
        
})


app.get('/registrate', router)
        
        
    









app.listen(PORT, (err) => {
err ? console.log(`Error: ${err}`)
:
console.log(`Server running on http://localhost:${PORT}`)})



























