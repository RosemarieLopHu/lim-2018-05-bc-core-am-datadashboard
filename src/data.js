window.computeUsersStats = (users, progress, courses) => {
// funciones a exportar en el entorno global window
  const arrayProgress = Object.keys(progress);
  for (const students of users ){
    arrayProgress.map((idUsers)=>{
     if(students.id===idUsers){
       if(progress[idUsers].intro !== undefined) {
         let userWithStats =  {
           //comvertir el objeto a un array, utilizar objet key
           stat : {
        
            percent: progress[idUsers].intro.percent,
            ejercicio
           }
         };
         console.log(userWithStats);
       }
     }
    })
  }
};
//Función para ordenar lista de usuarios
window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};

