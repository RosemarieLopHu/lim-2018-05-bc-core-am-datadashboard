# Data Dashboard

## Proyecto II

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la Ruta de Aprendizaje, y su desempeño en función a la Rúbrica de Niveles Esperados.
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó, qué ejercicios se han completado, los resultados de los quizzes, etc.

Por esa razon se ha creado un programa llamado **data dashboard** (_tablero de visualización de datos_), que permita manejar los datos mencionados con mas facilidad y las Training Managers (TMs) puedan tener una mejor experiencia  de usuarios en el momento que esten haciendo este trabajo analitico.


## Parte I

Iniciamos con una organizacion y planeacion de actividades **Backlog** donde nos organizamos como equipo colocando nuestras tareas epicas ordenadas por prioridad y desplegando tareas pequeñas que nos ayudarian a alcanzar los objetivos principales epicos de cada sprint.

![Texto alternativo](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36398613_1549128271864927_652482717119676416_n.jpg?_nc_cat=0&oh=5134e5a56c9e2d410a65473386f6388c&oe=5BE56184 "Backlog")

Para la realizacion de este programa hemos realizado previamente algunas entrevistas a los futuros usuarios y otras personas que nos brindarian datos valiosos para que este proyecto cumpliera con los estandares minimos requeridos en cuanto a funcionalidad. 

Sin embargo, los datos por sí solos son de poca utilidad, para transformar datos
en **información** necesitamos procesarlos y entenderlos, una manera muy
sencilla de hacerlo es creando _visualizaciones_. 

Para crear estas visualizaciones lo primero que hicimos fue un prototipo de baja fidelidad que nos serviria para tener una idea visual y  un poco mas clara de como queremos mostrar dichos datos, pensando siempre en la experiacia que nuestros ususrios iaban a tener al utilizar el programa y orientado a eso nuestro primer prototipo de baja fidelidad fue asi:

![Texto alternativo](URL "Título de la imagen")

Una vez hecho el prototipo de baja fidelidad y con una idea mas clara de visualizacion,  nos enfocamos en entender el JSON y trabajar en un analisis logico que nos ayudara a traer las tres datas que comprometen este proyecto, para lograr esto usamos el metodo **XHR(XMLHttpRequest)**, una vez logrado el objetivo trabajamos en la construccion de una estructura HTML mas solida que nos permita mostrar en pantalla dichas datas y  con ayuda del **DOM** este fue nuestro primer resultado:

![Texto alternativo](URL "Título de la imagen")   

## Parte II

En esta parte del proyecto, ya con un resultado de data mostrandose en la pantalla trabajamos en organizar como se mostrarian los cohorts, profundizamos el empleo del **DOM** y asi mejorrar el listado de los chohorts en la pantalla y el resultado de eso fue este:

![Texto alternativo](URL "Título de la imagen")

Una vez logrado el objetivo principal, pintar en la pantalla la data de cohort empezamos a trabjar en la implementacion de la primera funcion

####`computeUsersStats(users, progress, courses)`

Esta función es la responsable de "crear" la lista de usuarios (estudiantes)
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
usuarios (`users`) y calcular los indicadores necesarios de progreso para cada
uno. La función debe devolver un nuevo arreglo de usuarios donde a cada objeto
de usuario se le debe agregar una _propiedad_ con el nombre `stats` con las
estadísticas calculadas.

## Parte III

Terminamos de realizar la primera funcion y comenzamos a codear para realizar las siguientes funciones a continuacion:

####`sortUsers(users, orderBy, orderDirection)`

La función `sortUsers()` se encarga de _ordenar_ la lista de usuarios creada con
`computeUsersStats()` en base a `orderBy` y `orderDirection`.

y nuestro resultado fue este :

![Texto alternativo](URL "Título de la imagen")

####`filterUsers(users, search)`

* `users`: Arreglo de objetos creado con `computeUsersStats()`.
* `search`: String de búsqueda.

#### `processCohortData(options)`

Esta función es la que deberíamos usar al seleccionar un cohort y cada vez que
el usuario cambia los criterios de ordenado y filtrado en la interfaz. Esta
función debe invocar internamente a `computeUsersStats()`, `sortUsers()` y
`filterUsers()`.

## Parte IV

*Finalizamos las 4 funciones
*Hicimos los Test
El _boilerplate_  que ya contiene una estructura de archivos como punto de partida nos sirvio de apoyo para implementar nuestros test

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── data
│   ├── cohorts
│   │   └── lim-2018-03-pre-core-pw
│   │       ├── progress.json
│   │       └── users.json
│   └── cohorts.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    ├── data.spec.js
    ├── fixtures.js
    ├── headless.js
    └── index.html
```
*Implementamos el prototipo de alta fidelidad, trabajando a profundidad los estilos CSS

Y nuestro resultado final fue este:

![Texto alternativo](URL "Título de la imagen")

