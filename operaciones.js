const fs = require('fs')
const registrar = (nombre_del_animal, edad, tipo_de_animal, color_del_animal, enfermedad) => {
    try {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    if(!nombre_del_animal || !edad || !tipo_de_animal || !color_del_animal || !enfermedad) {
        console.error('Debes ingresar todos los datos')
        return
    }
    citas.push({nombre_del_animal, edad, tipo_de_animal, color_del_animal, enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log('Se ha creado la cita')
    } catch (error){
        console.error('[registrar] ==>', error)
    }
}

const leer = () => {
    try {
        const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8')).map((cita) => console.log(cita))
    } catch (error) {
        console.error('[leer] ==>', error)
    }
}

module.exports = {registrar, leer}