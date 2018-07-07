//Declaro las constantes con su valor que en este caso son las url de los JSON que estan en el servidor 
const urlUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // data tipo array
const urlCohorts = '../data/cohorts.json';//data tipo array
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';//data tipo objeto

// Seleccionando los elementos del DOM
const selectSede = document.getElementById('filtersedes');
const selectCohortLim = document.getElementById('selectCohorts');
const selectCohortArq = document.getElementById('selectCohorts');
const selectCohortSch = document.getElementById('selectCohorts');
const selectCohortCdmx = document.getElementById('selectCohorts');
const selectCohortGdl = document.getElementById('selectCohorts');
const selectCohorts = document.getElementById('selectCohorts');
const contentDivStudents = document.getElementById('contenedor')
const stringSearch = document.getElementById('search');
const selectOrderDirection = document.getElementById('orderDirection');
const selectOrderBy = document.getElementById('orderBy');
/* const ordenar = document.getElementById('ordenar'); */

// Funcion para hacer la petición al servidor usando XHR  
const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.onerror = Error;
  request.send();
}
//creando función error para que me alerte en caso de que haya un error
const Error = () => {
  console.log('Ha ocurrido un error');
}

//creando función que me ayuda a cargar los cohorts de lima 
const addCohortsLima = (event) => {
  let filterLima = '';
  const data = JSON.parse(event.target.responseText);
  for (i = 0; i < data.length; i++) {
    //filtrando los cohorts que empiezan con lim
    if (((data[i].id).includes('lim', 0) === true)) {
      filterLima += '<option>' + data[i].id + '</option>' + '<br>'
    }
  }
  selectCohorts.innerHTML = filterLima
}

//creando función que me ayuda a cargar los cohorts de Areq 
const addCohortsAqp = (event) => {
  let filterAreq = '';
  const data = JSON.parse(event.target.responseText);

  for (i = 0; i < data.length; i++) {
    //filtrando los cohorts que empiezan con aqp
    if (((data[i].id).includes('aqp', 0) === true)) {
      filterAreq += '<option>' + data[i].id + '</option>' + '<br>'
    }
  }
  selectCohorts.innerHTML = filterAreq
}

//creando función que me ayuda a cargar los cohorts de Ciudad de santiagoChile  
const addCohortsScl = (event) => {
  let filterSch = '';
  const data = JSON.parse(event.target.responseText);

  for (i = 0; i < data.length; i++) {
    //filtrando los cohorts que empiezan con cdmx
    if (((data[i].id).includes('scl', 0) === true)) {
      filterSch += '<option>' + data[i].id + '</option>' + '<br>'
    }
  }
  selectCohorts.innerHTML = filterSch
}

//creando función que me ayuda a cargar los cohorts de Ciudad de Mexico  
const addCohortsCdmx = (event) => {
  let filterCdmx = '';
  const data = JSON.parse(event.target.responseText);

  for (i = 0; i < data.length; i++) {
    //filtrando los cohorts que empiezan con cdmx
    if (((data[i].id).includes('cdmx', 0) === true)) {
      filterCdmx += '<option>' + data[i].id + '</option>' + '<br>'
    }
  }
  selectCohorts.innerHTML = filterCdmx
}

//creando función que me ayuda a cargar los cohorts de Ciudad de Guadalajara 
const addCohortsGdl = (event) => {
  let filterGdl = '';
  const data = JSON.parse(event.target.responseText);

  for (i = 0; i < data.length; i++) {
    //filtrando los cohorts que empiezan con guadalajara
    if (((data[i].id).includes('gdl', 0) === true)) {
      filterGdl += '<option>' + data[i].id + '</option>' + '<br>'
    }
  }
  selectCohorts.innerHTML = filterGdl
}
//CREANDO UNA  OPCION EN UN SELECT CON UN TEMPLATE
const show = (usersWithStats) => {
   console.log(usersWithStats);
  
  for (let i = 0; i < usersWithStats.length; i++) {
    contentDivStudents.innerHTML += `<tr>` +
      `<td>${usersWithStats[i].name}</td>
        <td>${usersWithStats[i].stats.percent}</td>               
        <td>${usersWithStats[i].stats.exercises.completed + ' de ' + usersWithStats[i].stats.exercises.total}</td>
        <td>${usersWithStats[i].stats.reads.completed}</td> 
        <td>${usersWithStats[i].stats.quizzes.completed}</td> 
        <td>${usersWithStats[i].stats.quizzes.scoreAvg}</td>`
      + `</tr>`;
  }
}
// creando función que relaciona usuarios con progreso
const addUserProgress = () => {
  const courses = ['intro']
  const users = JSON.parse(event.target.responseText);
  //console.log(users);
  const progress = () => {
    const progress = JSON.parse(event.target.responseText);
    const usersWithStats = computeUsersStats(users, progress, courses);
    show(usersWithStats)
    selectOrderDirection.addEventListener('change', (e)=>{
  
      console.log(selectOrderDirection.value);
       
      console.log( selectOrderBy.value);
      //console.log(usersWithStats)
      
    const nuevoArray = sortUsers(usersWithStats, selectOrderBy.value, selectOrderDirection.value);
    console.log(nuevoArray);
    
    contentDivStudents.innerHTML = '';
    show(nuevoArray)
     
      
    })
    //console.log(sortUsers(usersWithStats, 'Nombre', 'ASC'))
    //console.log(usersWithStats);
    


 /* select.addEventListener('change', (event) =>{
    console.log(event.target.value);
    
 });  */}

  getJSON(urlProgress, progress);
  getJSON(urlCohorts, courses);
}
// AGREGANDO EVENTO AL SELECT PARA BORRAR SU CONTENIDO
selectCohorts.addEventListener('change', event => {

  if (selectCohorts.value == 'lim-2018-03-pre-core-pw') {
    // console.log(usersWithStats, selectCohorts.value)
    getJSON(urlUsers, addUserProgress);

  } else {

    document.getElementById('nodata').innerHTML = 'Disculpe no contamos con esta informacion en este momento'
  }
})
//cuando el entorno gloal window cargue llamar a la siguiente funcion
window.addEventListener('load', () => {
  //Filtersede espera evento change para ejecutar la funcion que tiene como parametro el evento 
  selectSede.addEventListener('change', (event) => {
    switch (event.target.value) {
      case '0': getJSON(urlCohorts, addCohortsLima);
        break;
      case '1': getJSON(urlCohorts, addCohortsAqp);
        break;
      case '2': getJSON(urlCohorts, addCohortsScl);
        break;
      case '3': getJSON(urlCohorts, addCohortsCdmx);
        break;
      case '4': getJSON(urlCohorts, addCohortsGdl);
    }
  });


})

const addCohorts = (event) => {
  cohorts = JSON.parse(event.target.responseText);
  const listCohort = cohorts.find(cohort => cohort.id === 'lim-2018-03-pre-core-pw'); //se busca el cohort con ese id
  courses = Object.keys(listCohort.coursesIndex);

  computeUsersStats(users, progress, courses);
  console.log(usersWithStats);
}
