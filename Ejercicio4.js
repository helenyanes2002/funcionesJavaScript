/*PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo
de 20 cables de luz y contabilizar la cantidad de cables que
tienen energías menores a 20 Joules.

Nota: el formato de cada cable es:

cable={
 color:verde,
 energía: 50 ,
 portafor: Obi Wan
}*/

//Funcion flecha 
/*let cables=[
    {color:"Verde", energia:50, portador:"Obi Wan"},
    {color:"Amarillo", energia:11, portador:"Obi Wan"},
    {color:"Rosado", energia:24, portador:"Obi Wan"},
    {color:"Rojo", energia:17, portador:"Obi Wan"},
    {color:"Azul", energia:40, portador:"Obi Wan"},
    {color:"Blanco", energia:22, portador:"Obi Wan"},
    {color:"Negro", energia:18, portador:"Obi Wan"},
    {color:"Naranja", energia:20, portador:"Obi Wan"},
    {color:"Morado", energia:87, portador:"Obi Wan"},
    {color:"Gris", energia:30, portador:"Obi Wan"},
    {color:"Marrón", energia:50, portador:"Obi Wan"},
    {color:"Violeta", energia:14, portador:"Obi Wan"},
    {color:"Fucsia", energia:26, portador:"Obi Wan"},
    {color:"Cobre", energia:78, portador:"Obi Wan"},
    {color:"Oliva", energia:55, portador:"Obi Wan"},
    {color:"Coral", energia:90, portador:"Obi Wan"},
    {color:"Crema", energia:15, portador:"Obi Wan"},
    {color:"Borgoña", energia:8, portador:"Obi Wan"},
    {color:"Beige", energia:12, portador:"Obi Wan"},
    {color:"Turquesa", energia:19, portador:"Obi Wan"}
]

let cablesFiltrados = cables.filter((cable)=>cable.energia<20)
console.log(cablesFiltrados)
console.log("Los cables que contienen menor energía son: " + cablesFiltrados.length)*/


let colores=['Turquesa', 'Borgoña', 'Rojo', 'amarillo']
let energias=['55', '12', '8', '22']
let portadores=['Obi Wan', 'Obi Wan', 'Obi Wan', 'Obi Wan']

let numero=Math.floor(Math.random()*colores.length)
let numero2=Math.floor(Math.random()*energias.length)
let numero3=Math.floor(Math.random()*portadores.length)

let cables=[]

for(let i=0; i<20; i++){

    let cable={}

    cable.color=colores[Math.floor(Math.random()*colores.length)]
    cable.energia=energias[Math.floor(Math.random()*energias.length)]
    cable.portador=portadores[Math.floor(Math.random()*portadores.length)]
    cables.push(cable)
}

let cablesFiltrados = cables.filter((cable)=>cable.energia<20)
console.log(cablesFiltrados)