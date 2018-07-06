//creando primera funcion 
window.computeUsersStats = (users, progress, courses) => {
  for (let i = 0; i < users.length; i++) {
    let userId = users[i].id;
    let userProgress = progress[userId];
    if (JSON.stringify(userProgress) === '{}') {
      users[i].stats = {
        percent: 0,
        exercises: { total: 0, completed: 0, percent: 0, },
        reads: { total: 0, completed: 0, percent: 0, },
        quizzes: { total: 0, completed: 0, percent: 0, scoreSum: 0, scoreAvg: 0 }

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
              exercisesCompleted = 0;
              lecturesCompleted = 0;
              quizzesPercent = 0;
              exercisesPercent = 0;
              lecturesPercent = 0;

            }

            if (part.type === 'read') {
              lectures++;
              if(part.completed === 1){
                lecturesCompleted++;
              }else{
                lecturesCompleted = 0;
              }
            }
            if (lectures !== 0){

              lecturesPercent = Math.round((lecturesCompleted * 100) / lectures); 
            } else{
              lecturesPercent= 0;
            }
             

            if (part.type === 'quiz') { //type es la llave que hay en el objeto que estamos recorriendo
              quizzes++;
            }

            if (part.type === 'quiz' && part.completed === 1) {
              quizzesCompleted++;

              scoreSum += part.score;

            }
            quizzesPercent = Math.round((quizzesCompleted * 100 / quizzes));//truco para sacar 1 decimal

            if (part.type === 'practice') {
              if (part.hasOwnProperty('exercises')) {
                const partExercise = Object.keys(part.exercises)
                exercises = partExercise.length;
                
                const exerciseCompleted = Object.values(part.exercises)
                exerciseCompleted.map(exercise => {
                  if (exercise.completed !== undefined){
                    exercisesCompleted += exercise.completed;
                  } else {
                    exercisesCompleted = 0;
                  }
                  
                })
              }

            }
            exercisesPercent = Math.round((exercisesCompleted * 100 * 10) / (exercises || 1)) / 10;
            //aca le indicamos que si exercises=0, entonces que lo divida entre 1 para que no de un valor NaN 
          } //aca termina el for que recorre las parts
        } //aca termina el for que recorre las unidades
      }//aca termina el for que recorre los cursos
      // saca promedio
      scoreAvg = quizzesCompleted !== 0 ?  Math.round(scoreSum / quizzesCompleted) : 0;

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
          //completed: exercisesCompleted !== NaN ? exercisesCompleted : 0,
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
  console.log(users)
}
// funcion ordena la lista de usuarios creada con computeUsersStats en base a orderBy y OrderDirection
window.sortUsers = (users, orderBy, orderDirection) => {
console.log(users);

  const listOrder = users;

  if (orderBy === "name" && orderDirection === 'ASC') {
    return listOrder.sort(function (a, b) {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    })
  }
  if (orderBy === "name" && orderDirection === 'DESC') {
    return listOrder.sort(function (a, b) {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    })
  }

   if (orderBy === "percent" && orderDirection === 'ASC') {
    return ListOrder.sort(function (a, b) {
      return a.stats.percent - b.stats.percent;
    });
  }
  if (orderBy === "percent" && orderDirection === 'DESC') {
    return ListOrder.sort(function (a, b) {
      return b.stats.percent - a.stats.percent  ;
    });
  }

  if (orderBy === "exercises" && orderDirection === 'ASC') {
    ListOrder.sort(function (a, b) {
      return a.stats.exercises.completed - b.stats.exerises.completed;
    });
  }
  if (orderBy === "exercises" && orderDirection === 'DESC') {
    ListOrder.sort(function (a, b) {
      return b.stats.exerises.completed - a.stats.exercises.completed;
    });
  }

  if (orderBy === "quizz" && orderDirection === 'ASC') {
    ListOrder.sort(function (a, b) {
      return a.stats.quizzes.completed - b.stats.quizzes.completed;
    });
  }
  if (orderBy === "quizz" && orderDirection === 'DESC') {
    ListOrder.sort(function (a, b) {
      return b.stats.quizzes.completed - a.stats.quizzes.completed;
    });
  }

  if (orderBy === "quizzAvg" && orderDirection === 'ASC') {
    ListOrder.sort(function (a, b) {
      return a.stats.quizzes.scoreSum - b.stats.quizzes.scoreSum;
    });
  }
  if (orderBy === "quizzAvg" && orderDirection === 'DESC') {
    ListOrder.sort(function (a, b) {
      return b.stats.quizzes.scoreSum - a.stats.quizzes.scoreSum;
    });
  }

  if (orderBy === "reads" && orderDirection === 'ASC') {
    ListOrder.sort(function (a, b) {
      return a.stats.reads.completed - b.stats.reads.completed;
    });
  }
  if (orderBy === "reads" && orderDirection === 'DESC') {
    ListOrder.sort(function (a, b) {
      return b.stats.reads.completed - a.stats.reads.completed;
    });
  }
/*   if (orderDirection === "ASC") {
    ListOrder = ListOrder.reverse();
  } 

  return ListOrder; */ //arreglo de usuarios ordenados
}



const processCohortData = (options) => {
  /* let users = options.cohortData.users;
  // let cohort = options.cohort;
  let progress = options.cohortData.progress;
  let orderBy = options.orderBy;
  let orderDirection = options.orderDirection;
  let search = options.search;
  let courses = options.cohort.coursesIndex;
 */
  // console.log(courses);
  /* let usersFiltered = filterUsers(users, search);
  let usersWithStats = computeUsersStats(usersFiltered, progress, courses);
  let ListOrderFiltered = sortUsers(usersWithStatus, orderBy, orderDirection);
  return ListOrderFiltered;
} */

/* window.filterUsers = filterUsers;
window.computeUsersStats = computeUsersStats;
window.sortUsers = sortUsers;
window.processCohortData = processCohortData; */
}
 



