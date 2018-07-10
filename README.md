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

Por esa razón se ha creado un programa llamado **data dashboard** (_tablero de visualización de datos_), que permita manejar los datos mencionados con mas facilidad y las Training Managers (TMs) puedan tener una mejor experiencia  de usuarios en el momento que esten haciendo este trabajo analítico.


## Parte I

Iniciamos con la organización y planificación de las actividades **Backlog** el cual nos permite organizamos como equipo, colocando nuestras tareas epicas ordenadas por prioridad y desplegando tareas pequeñas que nos ayudarían a alcanzar los objetivos principales épicos de cada sprint.

![Backlog](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36398613_1549128271864927_652482717119676416_n.jpg?_nc_cat=0&oh=5134e5a56c9e2d410a65473386f6388c&oe=5BE56184 "Backlog")

Para la realización de este programa hemos realizado previamente entrevistas a los futuros usuarios de interés y otras personas que nos brindarían datos valiosos para que este proyecto cumpliera con los estándares mínimos requeridos en cuanto a funcionalidad. 

Sin embargo, los datos por sí solos son de poca utilidad, para transformar datos
en **información** necesitamos procesarlos y entenderlos, una manera muy
sencilla de hacerlo es creando _visualizaciones_. 

Para crear estas visualizaciones lo primero que hicimos fue un prototipo de baja fidelidad que nos serviría para tener una idea visual y  un poco más clara de cómo queremos mostrar dichos datos, pensando siempre en la experiencia de usuario quien finalmente utilizaría el programa. Orientado a ese propósito nuestro primer prototipo de baja fidelidad fue asi:

![prototipo 1](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36382783_1549167855194302_7992423616568360960_n.jpg?_nc_cat=0&oh=13086447804a57ddd91dbee97e19e542&oe=5BABEEA2 "Baja fidelidad 1")


![prototipo 2](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36396301_1549176325193455_3320110990841872384_n.jpg?_nc_cat=0&oh=ac76bc3cd86fdbc4c525f61815c891bd&oe=5BA5143B "Baja fidelidad 2")

Una vez hecho el prototipo de baja fidelidad y con una idea más clara de visualización,  nos enfocamos en entender el JSON y trabajar en un analisis lógico que nos ayudaría a traer las tres datas que comprometen este proyecto, para lograr esto usamos el método **XHR(XMLHttpRequest)**, una vez logrado el objetivo trabajamos en la construcción de una estructura **HTML** más sólida que nos permita mostrar en pantalla dichas datas con ayuda del **DOM** este fue nuestro primer resultado:

![primer resultado](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36418910_1549130771864677_7622131993236471808_n.jpg?_nc_cat=0&oh=b2371a0c551cfd2221e546e86fd9a670&oe=5BE867B9 "primer resultado")   

## Parte II

En esta parte del proyecto, ya con un resultado de data mostrandose en la pantalla trabajamos en organizar como se mostrarían los cohorts, profundizamos el empleo del **DOM** y asi mejorar el listado de los chohorts en la pantalla y el resultado de eso fue este:

![cohorts Lima](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36444427_1549167948527626_4828192592514514944_n.jpg?_nc_cat=0&oh=81c008bf95a2b522e82879096a84d61a&oe=5BEA2B52 "filtrado de cohots Lima")

![Mostrando estudiantes Lima ](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36418799_1549167895194298_2251600849325260800_n.jpg?_nc_cat=0&oh=6f62dcdd4d389167d4bcb22bd98714a6&oe=5BE653A0 "Estudiantes Lima")

![cohorts Arequipa- Peru](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36444427_1549167948527626_4828192592514514944_n.jpg?_nc_cat=0&oh=81c008bf95a2b522e82879096a84d61a&oe=5BEA2B52 "Arequipa- Peru")

![Cohorts Mexico](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36423176_1549167808527640_3194742914106261504_n.jpg?_nc_cat=0&oh=6d285c8c6b2d783c3613ce571ab85f7b&oe=5BA4CDF3 "Mexico ")

![Cohort Chile](https://scontent.flim9-1.fna.fbcdn.net/v/t1.15752-9/36423279_1549167801860974_7296827601119608832_n.jpg?_nc_cat=0&oh=f953848a1cf89eb4a44ff9ca0585232d&oe=5BB2F0D2 "Chile")

### General
<a href ="https://www.figma.com/proto/Q4oyzXOiifwqLM7cXZiYRGCZ/Untitled?scaling=scale-down&node-id=26%3A0"> <img src= "https://image.ibb.co/jL5VXT/General.png" alt="1" border="0"></a>

Una vez logrado el objetivo principal, pintar en la pantalla la data de cohort empezamos a trabajar en la implementación de la primera función

## *computeUsersStats(users, progress, courses)*

Esta función es la responsable de "crear" la lista de usuarios (estudiantes)
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
usuarios (`users`) y calcular los indicadores necesarios de progreso para cada
uno. La función debe devolver un nuevo arreglo de usuarios donde a cada objeto
de usuario se le debe agregar una _propiedad_ con el nombre `stats` con las
estadísticas calculadas.

## Parte III

Terminamos de realizar la primera funcion y comenzamos a codear para realizar las siguientes funciones a continuacion:

## *sortUsers(users, orderBy, orderDirection)*

La función `sortUsers()` se encarga de _ordenar_ la lista de usuarios creada con
`computeUsersStats()` en base a `orderBy` y `orderDirection`.


## *filterUsers(users, search)*

* `users`: Arreglo de objetos creado con `computeUsersStats()`.
* `search`: String de búsqueda.

## *processCohortData(options)*

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
* Implementamos el prototipo de alta fidelidad, Diseño de la Interfaz de Usuario (UI), para ello se utilizó Figma, que es una herramienta de diseño visual el cual nos permite representar nuestro ideal de solución, obteniendo como resultado lo siguiente:

### LOGIN
<a href ="https://www.figma.com/proto/Q4oyzXOiifwqLM7cXZiYRGCZ/Untitled?scaling=scale-down&node-id=26%3A0"> <img src= "https://image.ibb.co/jjiOmo/login.png" alt="1" border="0"></a>

### SEDES
<a href ="https://www.figma.com/proto/Q4oyzXOiifwqLM7cXZiYRGCZ/Untitled?scaling=scale-down&node-id=26%3A0"> <img src= "https://image.ibb.co/euNG6o/mapa.png" alt="1" border="0"></a>

### SELECT
<a href ="https://www.figma.com/proto/Q4oyzXOiifwqLM7cXZiYRGCZ/Untitled?scaling=scale-down&node-id=26%3A0"> <img src= "https://image.ibb.co/ddzw6o/tabla.png" alt="1" border="0"></a>

### KPI's
<a href ="https://www.figma.com/proto/Q4oyzXOiifwqLM7cXZiYRGCZ/Untitled?scaling=scale-down&node-id=26%3A0"> <img src= "https://image.ibb.co/dpYOmo/kpi.png" alt="1" border="0"></a>

