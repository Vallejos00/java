import express from "express"
const form = express.Router()





form.get('/registrate', (req, res) => {
    res.render('registrate')
})


export default form













