import express from "express"
const router = express.Router()
router.use(express.urlencoded())
import validationRules from "./validator.js"
import nodemailer from "nodemailer"
import validator from "express-validator"
const { body, validationResult } = validator 

/*---------------------------------------------------------------------------*/


router.get('/registrate', (req, res) => {
    res.render('registrate')
})


router.post('/registrate', validationRules, async (req, res) => {

   const errors = validationResult(req)

   if(!errors.isEmpty()){
     const arrWarnings = errors.array();
     res.render('registrate', {arrWarnings} )
     console.log(errors);
    } else{            
     const { firstName, lastName, email } = req.body
     const mailMsg = {
     to: 'pepe@pepe.com',
     from: email,
     subjet: 'Mensaje desde "registrate"',
     html: `Contacto de ${firstName} ${lastName}`
    }
    
  const transport = nodemailer.createTransport({
     host: "smtp.mailtrap.io",
     port: 2525,
     auth: {
          user: "417bb401d569cc",
          pass: "57b426990076ab"
        }
      });
      
      const sendMailStatus = await transport.sendMail(mailMsg)
      let sendMailFeedback = '';
      if (!sendMailStatus.length) {
        sendMailFeedback = 'El mensaje fue enviado correctamente'
      } 
      res.render ('registrate', { message: sendMailFeedback })
    }
    
      
    })
    
    export default router













