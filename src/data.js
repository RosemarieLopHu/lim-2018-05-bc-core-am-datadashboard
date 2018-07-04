//creando primera funcion 
window.computeUsersStats = (users, progress,courses) => {
  for (let i = 0; i < users.length; i++) {
   let userId = users[i].id;
   let userProgress = progress[userId];
   if (JSON.stringify(userProgress) === '{}') {
     users[i].stats = {
       percent: 0,
       exercises: { total: 0 , completed: 0, percent: 0, },
       reads: { total:0, completed:0, percent: 0, },
       quizzes: { total:0, completed:0, percent: 0, scoreSum:0, acoreAvg: 0 }
       
     };
   } else {
     // inicio contador 
     let percentGral = 0;
     let lectures = 0;
     let lecturesCompleted = 0;
     let lecturesPercent = 0;
     let quizzes = 0;
     let quizzesCompleted = 0;
     let quizzesPercent = 0;
     let exercises = 0;
     let exercisesCompleted = 0;
     let exercisesPercent = 0;
     let scoreSum = 0;
     let scoreAvg = 0;

     // Esto irá recorriendo cada id de curso
     for (let i in userProgress) { //i en este caso son los cursos que hay dentro del objeto userProgress
       let element = userProgress[i];
       if (courses.indexOf(i) < 0) {
         continue;
       }
       percentGral += element.percent / Object.keys(userProgress).length;
       for (let unit of Object.values(element.units)) { //aca itera por cada unidad de cada curso
         for (let part of Object.values(unit.parts)) { //aca recorremos cada parte de cada unidad de cada curso, las partes pueden ser lecturas, quizes, exercise, etc
           //en este caso si la part.length = 0 quiere decir que NO tiene datos en su interior 
           //asi que para que los contadores no se aumenten, se les da el valor de cero y se define aqui para asegurar que siempre los porcentajes den al menos cero

           if (part.length === 0) {
             quizzes = 0;
             exercises = 0;
             lectures = 0;
             quizzesCompleted = 0;
             exercisesCompleted =0;
             lecturesCompleted = 0;
             quizzesPercent = 0;
             exercisesPercent = 0;
             lecturesPercent = 0;

           }
         
           if (part.type === 'read') {
             lectures++;
           }
           if (part.type === 'read' && part.completed === 1) {// si la part.type === reads y completed es =1 entonces se incrementa el contador de lecturas completadas, ya que ademas de tener lecturas deben estar completadas, para entender mejor las parts ver el json de progress
             lecturesCompleted++;
           }

           lecturesPercent = Math.round((lecturesCompleted * 100) / lectures);        
           if (part.type === 'quiz') { //type es la llave que hay en el objeto que estamos recorriendo
             quizzes++;
           }

           if (part.type === 'quiz' && part.completed === 1) {
             quizzesCompleted++;
            
             scoreSum+= part.score;
             
           }
           quizzesPercent = Math.round((quizzesCompleted * 100 / quizzes)) ;//truco para sacar 1 decimal
                       
           if (part.type === 'practice') {
            if(part.hasOwnProperty('exercises')){
               const partExercise = Object.keys(part.exercises)
               exercises = partExercise.length;

               const exerciseCompleted = Object.values(part.exercises)
               exerciseCompleted.map(exercise => {
                 exercisesCompleted += exercise.completed;
                 //console.log(exercise.completed);
               })
            }
            
           }
           exercisesPercent = Math.round((exercisesCompleted * 100 * 10) / (exercises || 1)) / 10; 
           //aca le indicamos que si exercises=0, entonces que lo divida entre 1 para que no de un valor NaN 
         } //aca termina el for que recorre las parts
       } //aca termina el for que recorre las unidades
     }//aca termina el for que recorre los cursos
     // saca promedio
     scoreAvg = Math.round(scoreSum / quizzesCompleted);

     users[i].stats = {
       percent: percentGral,
       reads: {
         percent: lecturesPercent,
         total: lectures,
         completed: lecturesCompleted
       },
       exercises: {
         percent: exercisesPercent,
         total: exercises,
         completed: exercisesCompleted
       },
       quizzes: {
         percent: quizzesPercent,
         total: quizzes,
         completed: quizzesCompleted,
         scoreAvg: scoreAvg,
         scoreSum: scoreSum
       }
     };
   }
 }

 return users;
 
}

window.sortUsers=(data, key, orden)=>{

return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
});;

/*switch (orderBy) {
    case 'name':
      return usersSortedByName(users);
    case 'percent':
      return usersSortedByStatsPercent(users);
    default:
      return users;
}*/
}





