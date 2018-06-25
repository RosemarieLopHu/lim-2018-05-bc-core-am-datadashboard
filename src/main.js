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

