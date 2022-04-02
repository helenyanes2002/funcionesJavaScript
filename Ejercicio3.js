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
temperaturas=[8.5,9.0]
let sumaTemperatura = 0
let temperaturaMedia = 0 

let calcularTemperaturaMedia = (temperaturas)=>{
    sumaTemperatura = temperaturas.reduce(function(acumulador, siguienteValor){
         return (acumulador + siguienteValor)
    }); 
    return sumaTemperatura / temperaturas.length  
}
console.log("La temperatura media es: " + calcularTemperaturaMedia(temperaturas))
