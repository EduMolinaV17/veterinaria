Para Registrar una cita en la terminal:
--------------------------------------------
node index.js registrar "nombre" "edad" "tipo" "color" "enfermedad"

EJEMPLO: node index.js registrar "Benito" "1 año" "perro" "blanco" "otitis"

------------------------------------------------------------------------------

Para Leer/ver por la terminal las citas registradas:

node index.js leer

Esto mostrará un arreglo de objetos de Javascript tal como:
[
    {
    nombre_del_animal: 'Benito',
    edad: '1 año',
    tipo_de_animal: 'perro',
    color_del_animal: 'blanco',
    enfermedad: 'otitis'
    }
]