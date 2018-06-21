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
            exercices: progress[idUsers].intro.exercises,
            reads: progress[idUsers].intro.reads,
            quizzes:progress[idUsers].intro.quizzes,
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

//const mostrarQuizzesAlumna2 = (id) => {
  //mostrarQuizzesAlumna((err, data) => {
    //const scores = [];
   // Object.keys(data[id]).map((topic) => {
     // Object.keys(data[id][topic].units).map((leccion) => {
       // Object.keys(data[id][topic].units[leccion].parts).map((lectura) => {
          //if (data[id][topic].units[leccion].parts[lectura].hasOwnProperty('score')) {
           // scores.push(data[id][topic].units[leccion].parts[lectura].score)
         // }
       // })
      //})
    //});
   // const promedio = scores.reduce((sum, score) => sum + score, 0) / scores.length
   // console.log(promedio);

//console.log(Object.values(object1));