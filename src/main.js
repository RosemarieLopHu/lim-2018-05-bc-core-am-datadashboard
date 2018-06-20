const Userbtn = document.getElementById('btn-menu');
const listSedes = document.getElementById('response-container');
const listUsers = document.getElementById('search-student');
const urlC = '../data/cohorts.json';
const urlP = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const urlU = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

const getJson = (url,callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.onerror = handleError;
    request.send();
}
const handleError = () => {
    console.log('Se ha presentado un error');
}
// Progreso de lista de usuarios
const getProgress = (users, courses) => {
    let progress = [];
    getJson(urlP,(err,progressjson) => {
        for (const key in progressjson) {
            if (progressjson[key].intro) {
                progress.push(progressjson);
            }
        }
    });
    computeUsersStats(users, progress, courses);
}
