"use strict"

// let a = parseInt(prompt("Ingrese valor de a"))

// if(a > 10){
//     alert("a es mayor que 10")
// } else if(a < 10){
//     alert("a es menor que 10")
// } else if(a === 10){
//     alert("a es igual a 10")
// } else {
//     alert("a no es un número")
// }


// let numero = parseInt(prompt("Ingrese un número para saber si es de la suerte"))

//  if (numero > 0){
//    alert("Si es un número de la suerte")
//  } else if(numero = 15){
//     alert("No es un número de la suerte")
//  }



// let today = new Date().getDay()
// let dia 
// switch(today){
//     case 0:
//     dia = "domingo";
//     break;     
//     case 1:
//    dia = "lunes";
//    break;   
//    case 2:
//     dia = "martes"
//     break;
//     case 3:
//    dia = "miércoles";
//    break;  
//    case 4:
//    dia = "jueves";
//    break;   
//    case 5:
//    dia = "viernes";
//    break;
//    case 6:
//    dia = "sábado";
//    break;       
// }
// console.log(`el día de hoy es ${dia}`);

// function sayHello(name) {
//     document.write(`Hola ${name}, cómo te va?`)
// }

// sayHello("roberto");
// sayHello("Ricky");

// function askData() {
// const name = prompt("ingrese su nombre")
// const lastName = prompt("ingrese su apellido")
// printData(name, lastName)
// }

// function printData(n, l) {
//     alert(`Nombre: ${n} - Apellido: ${l}`)
// }


// const articulos= ["yerba", "leche","mango","crema", "galletitas"];
// const nombrearticulo= prompt("Introduzca artículo").toLowerCase();

// if (articulos.includes(nombrearticulo)){
//     alert("Este artículo ya está en la lista")
// } else {
//     articulos.push(nombrearticulo)
//     alert("El artículo no se encuantra en la lista, será agregado automáticamente")
//     alert("La lista quedó así: " + articulos)
// }



// let pasos = 10

// while(pasos > 0){
//     if(pasos===1) {document.write(`<p>Solo falta ${pasos} paso por caminar.</p>`);
//     } else {
//         document.write(`<p>Solo faltan ${pasos} pasos por caminar.</p>`)
//     }
//     pasos = pasos - 1
// }



// const num = parseInt(prompt("Tabla del..."))  

// for(let i = 1; i<= 10; i++){
//   document.write(`<p>${num} x ${i} = ${num*i}</p>`)
// }

/*-------------------------------------------------------------------------------------------------------*/
        
        // const nums = [12, 3, 55, 4, 587, 140]
       

// const transformed = nums.map(n => n*n)
// console.log(`Este es el original: ${nums}`);
// console.log(`Este es el nuevo: ${transformed}`);



// let aux = 0
// function suma(arr){
//     for(let i = 0; i < arr.length; i++){
//         aux = aux + arr[i];
//     }
//     return aux
// }

// suma(nums)
// console.log(aux);


// const newArr = nums.map((n)=>{
//     if(n % 2 === 0){
//         return `${n} es un número par`
//     } else{
//         return `${n} es un número impar`
//     }
//     })
//     console.log(newArr);

/*-----------------------------------------------------------------------------------------------------*/

// const names = ["Claudio", "Yesi", "Alan", "Franco", "Santiago"]

// const shortNames = names.filter((name) => {
//     return name.length <= 5
// })

// console.log(shortNames);


/*-------------------------------------DOM------------------------------------------------------*/

// const h1 = document.querySelector("h1")
// const p = document.querySelector(".para")
// const paras = document.querySelectorAll("p")

// console.log(h1);
// console.log(p);
// console.log(p.innerText);
// console.log(paras);

// paras.forEach((el,  idx) => (el.textContent = `Elemento número ${idx+1}`))


// const falseBtn = document.getElementById("falseBtn")

// falseBtn.addEventListener("click", alerta)

// function alerta(){
//     alert("Hola!")
// }


// let persona1 = {
//     nombre: "Peter",
//     edad: 39,
//     jubilado: false,
//     amigos: []
//   }
  
//   let persona2 = {
//     nombre: "Juliet", 
//     edad: 68,
//     jubilado: true,
//     amigos: ["Peter, Lupe"]
    
//   }
//   let persona3 = {
//     nombre: "Lupe",
//     edad: 19,
//     jubilado: false,
//     amigos: ["Peter", "Juliet", "Mirinda"]
//   }
  

// const personas = [persona1, persona2, persona3]

// personas.forEach(person => console.log(`${person.nombre} tiene ${person.edad} años`))


// persona1.amigos.push("Gonzalo", "Lucrecia", "Federica")


// personas.forEach(el => console.log(`${el.nombre} es amigo de ${el.amigos}`))


/*----------------------BREAKING BAD------------------------------------*/




// const cardsContainer = document.getElementById("cardsContainer")
// const btn = document.getElementById("btn")
// btn.addEventListener("click", getData)



// function getData() {
        
//         fetch("https://www.breakingbadapi.com/api/characters")
//         .then(res => res.json())
//         .then(data => renderData(data))
//         .catch(err => console.log(err));
// }

// function renderData(characters){
//      characters.forEach(char => {
//         const card = document.createElement("div")
//         card.innerHTML = `<div>
//         <img src="${char.img}" alt="${char.name}" </img>
//         <h2>${char.name}</h2>
//         </div>`;
//         cardsContainer.appendChild(card)   

//      });

       
// }


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



























