const {registrar, leer} = require('./operaciones.js')

const [ registro, nombre_del_animal, edad, tipo_de_animal, color_del_animal, enfermedad] = process.argv.slice(2)

if(registro === "registrar"){
    registrar(nombre_del_animal, edad, tipo_de_animal, color_del_animal, enfermedad)
    }   

if(registro === "leer"){
    leer()
}