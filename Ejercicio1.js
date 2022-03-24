/*1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetas de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planeta NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:*/


// //función tradicional
// function calcularDistancia(x1,x2,y1,y2) {

//     //Restax
//     let restax = x1-x2 
//     //Restay
//     let restay = y1-y2
//     //Potencia de la restax
//     let potenciax = Math.pow(restax, 2)
//     //Potencia de la restay
//     let potenciay = Math.pow(restay, 2)
//     //Suma
//     let sumaPotencias = potenciax + potenciay
//     //Raizcuadrada
//     let raiz = Math.sqrt(sumaPotencias)
//     return(raiz)
// }

// let distancia =  calcularDistancia(0,0,-10,-10)
// console.log(`La distancia calculada es ${distancia}`)



//Funcion de flecha 
let calcularDistancia=(x1,x2,y1,y2)=>(Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)))

//llamado a la funcion
let distancia=calcularDistancia(0,0,-10,-10).toFixed(2)
console.log(`La distancia calculada es ${distancia}`)