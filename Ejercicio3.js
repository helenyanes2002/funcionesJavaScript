/*3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día*/

//Función tradicional 
/*function calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima){
    temperaturaMedia = (temperaturaMaxima + temperaturaMinima)/2
    return(temperaturaMedia)
}
temperatura = calcularTemperaturaMedia(8.5,9.0)
console.log(`La temperatura media es: ${temperatura}`)*/

//Función Flecha
let calcularTemperaturaMedia = (temperaturaMaxima, temperaturaMinima)=>temperaturaMedia = (temperaturaMaxima + temperaturaMinima)/2
 

calcularTemperaturaMedia(8.9,5.5)
console.log("La temperatura media es: " + temperaturaMedia)
