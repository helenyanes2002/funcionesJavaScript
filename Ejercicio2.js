/*2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn*/

//Funcion tradicional 
/*function buscarPiloto(cadenaTexto){
    return(cadenaTexto.split(":")[1])
 }*/

//Función para separar una cadena de texto 
//Funcional, muestra todo el array
let buscarPiloto=(cadenaTexto)=>(cadenaTexto.split(":")) 
//Llamado a la función 
console.log(buscarPiloto("ABC1234:Helena Yanes:456"))

// //Funcional 
// let separarCadena=(cadenaTexto)=>(cadenaTexto.split(":")[1]) 
// //Llamado a la función 
// console.log(separarCadena("ABC1234:Helena Yanes:456"))






