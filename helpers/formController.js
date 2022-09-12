import express from 'express'
const form = express.Router()
form.use(express.urlencoded())
import nodemailer from 'nodemailer'


form.get('/registrate', (req, res) => {
    res.render('registrate')
})



form.post('/registrate', async (req, res) => {
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
          user: process.env.user,
          pass: process.env.pass
        }
      });

      const sendMailStatus = await transport.sendMail(mailMsg)
      let sendMailFeedback = '';
      if (sendMailStatus.rejected.length){
        sendMailFeedback = 'No se pudieron enviar los datos'
      } else{
        sendMailFeedback = 'Datos enviados'
      }
      res.render('registrate', {message: sendMailFeedback})

})

export default form













