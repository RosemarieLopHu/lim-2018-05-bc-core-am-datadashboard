const Userbtn = document.getElementById('btn-users');
//const Userbtn = document.getElementById('btn-menu');
//const listSedes = document.getElementById('response-container');
//const listUsers = document.getElementById('search-student');
const urlC = '../data/cohorts.json';
const urlP = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const urlU = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

const getJson = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.onerror = handleError;
  request.send();
}
const handleError = () => {
  console.log('Se ha presentado un error');
}
// definiendo el parseo de variables

const progresoUsuario = () => {
  const usuario = JSON.parse(event.target.responseText);
  const progress = (event) => {
    const data2 = JSON.parse(event.target.responseText);
    computeUsersStats(usuario, data2);
  }
  getJson(urlP, progress);
}
getJson(urlU,(progresoUsuario))