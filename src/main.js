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

const addCohorts = (event) => {

  const data = JSON.parse(event.target.responseText);
  let filtroLima="";
  let filtroArequipa="";
  let filtroCdmx="";
  let filtroScl="";
  let dataCohort="";


		for (i = 0; i < data.length; i++) {
		  dataCohort += data[i].id + "<br>";
		   if (((data[i].id).includes('lim', 0))==true){ //filtra los cohorts que empiezan con lim
           filtroLima += "<button>" + data[i].id + "</button>"+ "<br>";
           }
           if (((data[i].id).includes('aqp', 0))==true){ //filtra los cohorts que empiezan con lim
           filtroArequipa += "<button>" + data[i].id + "</button>"+ "<br>";
           }
           if (((data[i].id).includes('cdmx', 0))==true){ //filtra los cohorts que empiezan con lim
           filtroCdmx += "<button>" + data[i].id + "</button>"+ "<br>";
           }
            if (((data[i].id).includes('scl', 0))==true){ //filtra los cohorts que empiezan con lim
           filtroScl += "<button>" + data[i].id + "</button>"+ "<br>";
           }
	     }

 
	 document.getElementById("lima").innerHTML = filtroLima; 
	 document.getElementById("aqp").innerHTML = filtroArequipa; 
	 document.getElementById("cdmx").innerHTML = filtroCdmx; 
	 document.getElementById("scl").innerHTML = filtroScl;
  }
 var seleccionarOpcion = function(event) {

  var indiceOpcion = (event.target.selectedIndex);
  var sede = event.target[indiceOpcion].dataset.sede;
   
  getJSON(urlUser,addUser);
  document.getElementById("sede").innerHTML = sede;
   
}

const addUser = (event) => { 
  
  const data = JSON.parse(event.target.responseText);
  let nameUsers="";
  for (i = 0; i < data.length; i++) {
  nameUsers += data[i].name + "<br>";
  }

   document.getElementById("nameusers").innerHTML = nameUsers;
  
  }; 

 getJSON(urlCohorts, addCohorts);









