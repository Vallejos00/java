import express from "express"
const router = express.Router()
router.use(express.urlencoded())
import nodemailer from "nodemailer"






import validator from "express-validator"
const { body, validationResult } = validator 

const validationRules = [
   body('firstName')
   .notEmpty().withMessage('Debe ingresar un nombre').isLength({min: 2, max: 30}).withMessage('Su nombre debe tener entre 2 y 30 carácteres'),
   body('lastName')
   .notEmpty().withMessage('Debe ingresar un apellido').isLength({min: 2, max: 30}).withMessage('Su apellido debe tener entre 2 y 30 carácteres'),
   body('email', 'Debe ingresar un mail')
   .notEmpty().withMessage('Debe ingresar un mail').isEmail().withMessage('Debe ingresar un mail válido')
]








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
      if (sendMailStatus.rejected.length) {
        sendMailFeedback = 'No se pudo enviar el mensaje'
      } else {
        sendMailFeedback = 'El mensaje fue enviado correctamente'
      }
      res.render ('registrate', { message: sendMailFeedback })
    }
      
    })
    
    export default router













