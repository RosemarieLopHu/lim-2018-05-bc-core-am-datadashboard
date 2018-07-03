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
  console.log('A ocurrido un error ??');
}
const addUserProgress = () => {
 
 const courses = ["intro"] 
  const users = JSON.parse(event.target.responseText);  

 const progress = () => {
   const progress = JSON.parse(event.target.responseText);
   const usersWithStats= computeUsersStats(users, progress, courses);
   var sel = document.getElementById('selectCohort');
   sel.addEventListener('change', () => {

    if ( sel.value=='lim-2018-03-pre-core-pw') {
   showusers(usersWithStats);
   } else {
   document.getElementById('nodata').innerHTML = 'Disculpe no manejamos esa data por los momentos';  
   
   }
   });

   var selectorderby = document.getElementById('orderby');
   var selectdirection = document.getElementById('direction');
   selectorderby.addEventListener('change', () => {
     selectdirection.addEventListener('change', () => {

   if ( selectorderby.value=='name') {
      if (selectdirection.value=='ascendent'){
         let sortbyname=sortUsers(usersWithStats,'name','asc');
          showusers(sortbyname);
      }else{
         let sortbyname=sortUsers(usersWithStats,'name','desc');
         showusers(sortbyname);
      }
   }else{
     showusers(usersWithStats);
   }

      });
   });

console.log(sortUsers(usersWithStats,usersWithStats.name));
 
 }    

 getJSON(urlProgress, progress);
 getJSON(urlCohorts, courses);  
}
getJSON(urlUser, addUserProgress);

const showusers=(users)=>{
   let data= users;
      document.getElementById('ocult').style.display = 'block';
      document.getElementById('nodata').style.display = 'none';
      var datos = document.querySelector('#datos');
      datos.innerHTML = '';
    for(i = 0; i < data.length; i++) {
       let TodoUser = (data[i]);
       datos.innerHTML +=`
           <tr class="row col-md-12 t-a-c" >
               <th class="col-md-2 ln-correct-50">${TodoUser.name}</th>
               <td class="col-md-1 ln-correct-50">${TodoUser.stats.percent + " % "}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.exercises.total}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.exercises.completed}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.exercises.percent + " % "}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.reads.total}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.reads.completed}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.reads.percent + " % "}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.quizzes.total}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.quizzes.completed}</td>
               <td class="col-md-1 secundary">${TodoUser.stats.quizzes.percent + " % "}</td>
           </tr>
        `;

   }
  
}


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
      //console.log(data[i].id);
      //filtra los cohorts que empiezan con lim
       if (((data[i].id).includes('lim', 0)) === true){ 
            filtroLima += "<option>" + data[i].id + "</option>" + "<br>";
           }
          }
    document.getElementById("selectCohort").innerHTML = filtroLima;

  }
   // Funcion que me carga los cohorts de arequipa
 const addCohortsaqp = (event) => {
    let filtroArequipa="";
    const data = JSON.parse(event.target.responseText);
      for (i = 0; i < data.length; i++) {
             if (((data[i].id).includes('aqp', 0))===true){ 
             filtroArequipa += "<option>" + data[i].id + "</option>"+ "<br>";
             } 
        }
    document.getElementById("selectCohort").innerHTML = filtroArequipa;
  }

  // Funcion que carga los cohorts de mexico
  const addCohortscdmx = (event) => {
    const data = JSON.parse(event.target.responseText);
    let filtroCdmx="";
      for (i = 0; i < data.length; i++) {
             if (((data[i].id).includes('cdmx', 0))==true){ 
             filtroCdmx += "<option>" + data[i].id + "</option>"+ "<br>";
             }
          }
     document.getElementById("selectCohort").innerHTML = filtroCdmx; 
  }

  // Funcion que cargar los cohorts de chile
  const addCohortsscl = (event) => {
    const data = JSON.parse(event.target.responseText);
    let filtroScl="";
      for (i = 0; i < data.length; i++) {
      if (((data[i].id).includes('scl', 0))==true){ 
            //filtra los cohorts que empiezan con lim
             filtroScl += "<option>" + data[i].id + "</option>"+ "<br>";
            }
         }
     document.getElementById("selectCohort").innerHTML = filtroScl;
  }
});

const addCohorts = (event) => {
  cohorts = JSON.parse(event.target.responseText);
  const listCohort = cohorts.find(cohort => cohort.id === 'lim-2018-03-pre-core-pw'); //se busca el cohort con ese id
  courses = Object.keys(lisCohort.coursesIndex);

  computeUsersStats(users, progress, courses);
  /*       console.log(usersWithStats)*/
}

// Se declara la función para que ordene a los usuarios

function sortName() {
  const direccion = search.innerHTML;
  if (direccion == 'ASC') {
    search.innerText = 'DESC';
  } else {
    search.innerText = 'ASC';
  }

  const sortedUser = window.sortedUser(usersStats, 'percent', direction);
  studentContainer.innerHTML = '';
  for (let student of sortedUsers) {
    studentContainer.innerHTML += `<p>${student.name}${student.stats.percent}</p>`;
  }
}
function onSearchStudents() {
  const buscar = searchStudents.value;
  const filtroUsers = window.filterUsers(usersWithStats, buscar);
  studentList.innerHTML = '';
  filtroUsers.forEach(student => {
    studentList.innerHTML += `<p>${student.name}</p>`
  });
}
