//const { calcularPrecio } = require("./hola")
//console.log(calcularPrecio(100))

var nombre = "axel"
var apellido = "navarro"

console.log(`Hola ${nombre} ${apellido}`)

const Alumno = require("./src/Models/Alumno")
Alumno.Username = "Nacho"
Alumno.DNI="468794949"
console.log(Alumno.Username,Alumno.DNI)