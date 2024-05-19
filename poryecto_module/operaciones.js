import { writeFile, readFile } from 'fs/promises'
export const registrar = async (nombre_del_animal, edad, tipo_de_animal, color_del_animal, enfermedad) => {
    try {
        const datos = await readFile('citas.json', 'utf8')
    const citas = JSON.parse(datos)
    if(!nombre_del_animal || !edad || !tipo_de_animal || !color_del_animal || !enfermedad) {
        console.error('Debes ingresar todos los datos')
        return
    }
    citas.push({nombre_del_animal, edad, tipo_de_animal, color_del_animal, enfermedad})
    await writeFile('citas.json', JSON.stringify(citas))
    console.log('Se ha creado la cita')
    } catch (error){
        console.error('[registrar] ==>', error)
    }
}

export const leer = async () => {
    try {
        const datos = await readFile('citas.json', 'utf8')
        const citas = JSON.parse(datos).map((cita) => console.log(cita))
    } catch (error) {
        console.error('[leer] ==>', error)
    }
}