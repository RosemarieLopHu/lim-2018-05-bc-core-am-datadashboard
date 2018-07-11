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
const stringSearch = document.getElementById('search-input');
/*const selectOrderDirection = document.getElementById('orderDirection'); */
const selectOrderBy = document.getElementById('orderBy');

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

//CREAMOS EL OBJETO OPTIONS PARA LA CUARTA FUNCION 
//Objeto para crear funcion 4
let options = {

  cohort: null,
  cohortData: {
    users: null,
    progress: null
  },

  orderBy: 'name',
  orderDirection: 'ASC',
  search: ''

}

// creando función que relaciona usuarios con progreso y cohorts
const addUserProgress = () => {
  const addCohorts = () => {
    const cohortList = JSON.parse(event.target.responseText);
    options.cohort=cohortList

  }

  const users = JSON.parse(event.target.responseText);
  options.cohortData.users = users;
  const progress = () => {
    const progressUsers = JSON.parse(event.target.responseText);
    options.cohortData.progress = progressUsers;
  }
  getJSON(urlProgress, progress);
  getJSON(urlCohorts, addCohorts);
}
getJSON(urlUsers, addUserProgress);

//CREANDO UNA FUNCION EN DONDE ME IMPRIME LA LISTA DE USUARIOS 
const show = (usersWithStats) => {
  for (let i = 0; i < usersWithStats.length; i++) {
    contentDivStudents.innerHTML += `<tr>` +
      `<td>${usersWithStats[i].name}</td>
       <td>${usersWithStats[i].stats.percent + '%'}</td>               
       <td>${usersWithStats[i].stats.exercises.completed + ' de ' + usersWithStats[i].stats.exercises.total}</td>
       <td>${usersWithStats[i].stats.reads.completed}</td> 
       <td>${usersWithStats[i].stats.quizzes.completed}</td> 
       <td>${usersWithStats[i].stats.quizzes.scoreAvg + '%'}</td>`
      + `</tr>`;
  }
}

// AGREGANDO EVENTO AL SELECT PARA BORRAR SU CONTENIDO
selectCohorts.addEventListener('change', event => {
  event.preventDefault();
  if (selectCohorts.value === 'lim-2018-03-pre-core-pw') {
    const cohort = options.cohort.find(cohort => cohort.id === event.target.value);
    options.cohort=cohort;
    const dataUsers = processCohortData(options);
    show(dataUsers);

  } else {

    document.getElementById('nodata').innerHTML = 'Disculpe no contamos con esta informacion en este momento'
  }
});


stringSearch.addEventListener('keyup',event=>{
  event.preventDefault();
//capturamos el valor que se ingresa en el stringsearch y lo guardamos en la variable 
  let searchValue = stringSearch.value;
  //asignamos el valor capturado para pasar al objeto oprions propiedad search
  options.search=searchValue;

  let filter = processCohortData(options);
  //visualizo lo que se busca 
  contentDivStudents.innerHTML='';
  show(filter);

});

selectOrderDirection.addEventListener('click', (event) => {
  event.preventDefault();
  options.orderBy = selectOrderBy.value;
  options.orderDirection = selectOrderDirection.value;
  const userOrder = processCohortData(options);
  contentDivStudents.innerHTML='';
  show(userOrder);
});
