import express from "express"
const form = express.Router()
form.use(express.urlencoded())
import nodemailer from "nodemailer"

form.get('/registrate', (req, res) => {
    res.render('registrate')
})



form.post('/registrate', (req, res) => {
    const { firstName, lastName } = req.body
    const mailMsg = {
        to: 'pepe@pepe.com',
        from: lastName,
        subjet: 'Mensaje desde "registrate"',
    }
    
    
       const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "417bb401d569cc",
          pass: "57b426990076ab"
        }
      });

      transport.sendMail(mailMsg)

})

export default form













