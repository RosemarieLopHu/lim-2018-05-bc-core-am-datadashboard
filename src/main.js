// Declaro las varibles con los urls
 const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
 const urlCohorts = '../data/cohorts.json';
 const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

 // Funcion para hacer la petición  
 const getJSON = (url, callback) => {
   const request = new XMLHttpRequest();
   request.open('GET', url);
   request.onload = callback;
   request.onerror = Error;
   request.send();
 }
 const Error = () => {
  console.log('A ocurrido un error');
}
const addUsers = (event) => {
  const courses= ['intro'];
  const users = JSON.parse(event.target.responseText);
  /* console.log(users) */

  const addCohorts = (event) => {
    const cohorts = JSON.parse(event.target.responseText);
    
  getJSON(urlCohorts, addCohorts);

    const progress = () => {
      const progress = JSON.parse(event.target.responseText);
      userWithStats= window.computeUsersStats(users, progress, courses);
      console.log(usersWithStats)
       
    }
    getJSON(urlProgress, progress)
  getJSON(urlCohorts, courses);
}
getJSON(urlUser, addUsers)



 window.addEventListener('load', function() {
//Esuchando el evento del select cuando cambia de sede
filtro.addEventListener('change', function(event) {
      switch (event.target.value) {
        case '0': getJSON(urlCohorts, addCohortslima);
         break;
        case '1':getJSON(urlCohorts, addCohortsaqp);
         break;
        case '2':getJSON(urlCohorts, addCohortsscl );
         break;
         case '3':getJSON(urlCohorts, addCohortscdmx);
    }
});
// Funcion que me carga los cohorts de lima
const addCohortslima = (event) => {
  let filtroLima="";
  const data = JSON.parse(event.target.responseText);
    for (i = 0; i < data.length; i++) {
      console.log(data[i].id);
      //filtra los cohorts que empiezan con lim
       if (((data[i].id).includes('lim', 0)) === true){ 
            filtroLima += "<li>" + data[i].id + "</li>" + "<br>";
           }
          }
    document.getElementById("sede").innerHTML = filtroLima;
  }
  
   // Funcion que me carga los cohorts de arequipa
 const addCohortsaqp = (event) => {
    let filtroArequipa="";
    const data = JSON.parse(event.target.responseText);
      for (i = 0; i < data.length; i++) {
             if (((data[i].id).includes('aqp', 0))===true){ 
             filtroArequipa += "<li>" + data[i].id + "</li>"+ "<br>";
             } 
        }
    document.getElementById("sede").innerHTML = filtroArequipa;
  }

  // Funcion que carga los cohorts de mexico
  const addCohortscdmx = (event) => {
    const data = JSON.parse(event.target.responseText);
    let filtroCdmx="";
      for (i = 0; i < data.length; i++) {
             if (((data[i].id).includes('cdmx', 0))==true){ 
             filtroCdmx += "<li>" + data[i].id + "</li>"+ "<br>";
             }
          }
     document.getElementById("sede").innerHTML = filtroCdmx; 
  }

  // Funcion que cargar los cohorts de chile
  const addCohortsscl = (event) => {
    const data = JSON.parse(event.target.responseText);
    let filtroScl="";
      for (i = 0; i < data.length; i++) {
      if (((data[i].id).includes('scl', 0))==true){ 
            //filtra los cohorts que empiezan con lim
             filtroScl += "<li>" + data[i].id + "</li>"+ "<br>";
            }
         }
     document.getElementById("sede").innerHTML = filtroScl;
  }
});
}
