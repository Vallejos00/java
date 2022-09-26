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

 export default validationRules;
