## Registrar

Para Registrar una cita escriba en la terminal:
--------------------------------------------
````
node index.js registrar "nombre" "edad" "tipo" "color" "enfermedad"
````
EJEMPLO: `node index.js registrar "Benito" "1 año" "perro" "blanco" "otitis"`

------------------------------------------------------------------------------

## Leer
Para Leer/ver por la terminal las citas registradas escriba en la Terminal:
-----------------------------------------------------
````
node index.js leer
````

Esto mostrará un arreglo de objetos de Javascript tal como:
```
    {
    nombre_del_animal: 'Benito',
    edad: '1 año',
    tipo_de_animal: 'perro',
    color_del_animal: 'blanco',
    enfermedad: 'otitis'
    }
