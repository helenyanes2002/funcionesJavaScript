/*PROBLEMA: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
nave vendida, menos el 5% de deducciones aplicada solo a las
comisiones. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado;*/

const salarioMensual = 3500000
const comision = 1500000
let comisionConDescuento = comision - (5*comision/100)


//Funcion tradicional 
/*function CalcularSalarioMensual(cantidadNavesVendidas){
    
    let sumaDeComision = cantidadNavesVendidas * comisionConDescuento
    let salarioTotal = sumaDeComision + salarioMensual

    return salarioTotal
    
}
console.log(`El salario mensual del vendedor es: ${CalcularSalarioMensual(4)}`)*/

//Funcion de flecha  
let resultadoSalario = (cantidadNavesVendidas) => {
    
    let sumaDeComision = cantidadNavesVendidas * comisionConDescuento
    let salarioTotal = sumaDeComision + salarioMensual

    return salarioTotal
    
}
console.log(`El salario mensual del vendedor es: ${resultadoSalario(4)}`)