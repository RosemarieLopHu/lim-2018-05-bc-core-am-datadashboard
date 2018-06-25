<<<<<<< HEAD
let sedeSelect = document.getElementById('selectSede');
let programas = document.getElementById('programas');
const generacion = document.getElementById('generacion');
const tblBody = document.getElementById('user-container');

//obteniendo data de cohorts
const Cohorts = `../data/cohorts.json`;

function getCohorts(callback) {
  const xhrCohorts = new XMLHttpRequest();
  xhrCohorts.open('GET', Cohorts);
  xhrCohorts.onload = callback;
  xhrCohorts.onerror = handleError;
  xhrCohorts.send();
}
function addUser(users, progress) {
  getCohorts(() => {
    const dataCohorts = JSON.parse(event.target.responseText);
    const courses = [];
   for (cohort of dataCohorts){
      if (cohort.hasOwnProperty('coursesIndex')) {
        if (cohort.id === generacion.value) {
           courses.push(Object.keys(cohort.coursesIndex).toString())
        }
      }
   }


function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `../data/cohorts/lim-2018-03-pre-core-pw/users.json`);
  xhr.onload = function () {
    const users = JSON.parse(event.currentTarget.responseText);
    const xhrCohorts = new XMLHttpRequest();
    xhrCohorts.open('GET', `../data/cohorts/lim-2018-03-pre-core-pw/progress.json`);
    xhrCohorts.onload = function () {
      const progress = JSON.parse(event.currentTarget.responseText);
      addUser(users, progress)
    }
    xhrCohorts.onerror = handleError;
    xhrCohorts.send();
  };
  xhr.onerror = handleError;
  xhr.send();
}
function handleError() {
  console.log('Se ha presentado un error');
}
=======
window.addEventListener('load', function() {

  filtro.addEventListener('change', function(event) {
        
      switch (event.target.value) {

      case '0': getJSON(urlCohorts, addCohortslima);
        break;
      case '1':getJSON(urlCohorts, addCohortsaqp);
        break;
      case '2':getJSON(urlCohorts, addCohortscdmx);
        break;
      case '3':getJSON(urlCohorts, addCohortsscl);
      }
  });
  
  
  const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  const urlCohorts = '../data/cohorts.json';
  const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
  
  const getJSON = (url, callback) => {
    
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.onerror = Error;
    request.send();
  }
  
  const Error = () => {
    console.log('A ocurrido un error ??');
  }
  
  
  const addCohortslima = (event) => {
    let filtroLima="";
    let dataCohort="";
    const data = JSON.parse(event.target.responseText);
      for (i = 0; i < data.length; i++) {
        dataCohort += data[i].id + "<br>";
         if (((data[i].id).includes('lim', 0))===true){ //filtra los cohorts que empiezan con lim
             filtroLima += "<button>" + data[i].id + "</button>"+ "<br>";
             }
         
        }
      document.getElementById("sede").innerHTML = filtroLima;
  
    }
  
   const addCohortsaqp = (event) => {
      let filtroArequipa="";
      let dataCohort="";
      const data = JSON.parse(event.target.responseText);
        for (i = 0; i < data.length; i++) {
          dataCohort += data[i].id + "<br>";
               if (((data[i].id).includes('aqp', 0))===true){ 
               filtroArequipa += "<button>" + data[i].id + "</button>"+ "<br>";
               } 
          }
      document.getElementById("sede").innerHTML = filtroArequipa; 
  
    }
  
    const addCohortscdmx = (event) => {
      const data = JSON.parse(event.target.responseText);
      let filtroCdmx="";
      let dataCohort="";
        for (i = 0; i < data.length; i++) {
           dataCohort += data[i].id + "<br>";
               if (((data[i].id).includes('cdmx', 0))==true){ 
               filtroCdmx += "<button>" + data[i].id + "</button>"+ "<br>";
               }
            }
       document.getElementById("sede").innerHTML = filtroCdmx; 
    }
  
    const addCohortsscl = (event) => {
      const data = JSON.parse(event.target.responseText);
      let filtroScl="";
      let dataCohort="";
        for (i = 0; i < data.length; i++) {
          dataCohort += data[i].id + "<br>";
         
                if (((data[i].id).includes('scl', 0))==true){ //filtra los cohorts que empiezan con lim
               filtroScl += "<button>" + data[i].id + "</button>"+ "<br>";
  
               }
           }
       document.getElementById("sede").innerHTML = filtroScl;
    }
  
  
  
  const addUser = (event) => { 
    
    const data = JSON.parse(event.target.responseText);
    let nameUsers="";
    let nameUsersc="";
    for (i = 0; i < data.length; i++) {
    nameUsers += data[i].name + "<br>";
    nameUsersc += data[i].name ;
    }
     console.log(Object.keys(nameUsersc));
     console.log(nameUsersc);
     document.getElementById("nameusers").innerHTML = nameUsers;
    
    }; 
  
  
  getJSON(urlCohorts, addCohortslima);
  });
  
  








>>>>>>> 3d5edb80c2a42e34ba0377caaffabbf585498b2f

