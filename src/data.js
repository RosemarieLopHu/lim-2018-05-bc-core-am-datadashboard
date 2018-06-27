window.computeUsersStats = (users, progress,courses) => {
  const userWithStats = users.map(user=>{ 
     //recorriendo base de datos de usuario con el metodo map
    const usersId = user.id;  //creamos una const para obtener los id de los usuario
    const arrUsers = Object.keys ( progress[usersId]);// crear array para obtener traer los datos de usuario como objecto
  
    percent=_=> {
      let percent = 0; // declarando var porcentaje
      percent=progress.map(avance=>{return progress[usersId][avance].percent;}) // mapeando el porcentaje de usarios a traves de una funcion anonima(noes ncesario q todo tnga nombre) q es avance
      return percent
      }
    })
  };  
  
  
  
/*stat {
  percent:funcion
  exercises: null,
  quizz:null,
  reads:null,
}

}*/





/*const userContainerElem = document.getElementById('user-container')
let cohorData= {

}
  const userWithStats = cohorData.users.map(function(obj) {

    if(progress[idUsers].hasOwnProperty('intro') !== undefined) {
     const completedExercises = (progress[idUsers]['intro']['units']['02-variables-and-data-types']['exercises'])
     const userResult = {name:obj.name, stats:{exercises:completedExercises}}
      const liElem =document.createElement('li')
      liElem.innerHTML = `${userResult.name} (ejercicios completados: ${userResult.stats.exercises})`;
      responseContainerElem.appendChild(liElem)
       };
      });
      console.log(userWithStats);*/


