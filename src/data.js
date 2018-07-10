//creando primera funcion 
window.computeUsersStats = (users, progress, courses) => {

  let newArrUsers = users.map((user) => {

    //se inicia contador 

    let percent = 0;
    let totalExercises = 0;
    let completedExcercises = 0;
    let totalReads = 0;
    let completedReads = 0;
    let totalQuizzes = 0;
    let completedQuizzes = 0;
    let scoreSum = 0;
    let scoreAvg = 0;

    // calculo de procentaje  de completitud
    courses.forEach(coursesName => { //ejecuta la funcion una vez por cada elemento
      if (progress[user.id].hasOwnProperty(coursesName)) { //evaluamos si el objeto tiene la propiedad buscada 
        percent = progress[user.id].intro.percent;
        const usersUnits = progress[user.id].intro.units;// entroa la propiedad units
        Object.keys(usersUnits).forEach((unitName) => { //obtengo array con las  propiedades  enumeradas de mi objeto y evaluo por cada elemento
          const parts = usersUnits[unitName].parts
          Object.keys(parts).forEach((partName) => {
            const partsName = parts[partName];
            //console.log(partsName)
            if (partsName.hasOwnProperty('exercises')) {
              const exercises = partsName.exercises;
              Object.keys(exercises).forEach((exerciseName) => {
                const exercise = exercises[exerciseName];
                totalExercises += 1;
                if (exercise.completed !== undefined) {
                  completedExcercises += exercise.completed;
                } else {
                  completedExcercises = 0;
                }

              });
            }
            // Calculo de lecturas --> completitud,total lecturas completadas
            if (partsName.hasOwnProperty('type')) {
              if (partsName.type === 'read') {
                totalReads++;
                completedReads += partsName.completed;
                //console.log(partsName)
              }
            }

            //calculos de quizzes --> completitud,total/quizzes,score y promedio
            if (partsName.hasOwnProperty('type')) {
              if (partsName.type === 'quiz') {
                totalQuizzes += 1;
                completedQuizzes += partsName.completed;
                scoreSum += partsName.score ? partsName.score : 0;
                scoreAvg = scoreSum / completedQuizzes ? scoreSum / completedQuizzes : 0;
              }
            }
          })
        })
      }
    })
    //calculo de porcentaje --> ejercicios, lecturas,quizzes
    const percentExercises = (completedExcercises / totalExercises) * 100
    const percentReads = (completedReads / totalReads) * 100
    const percentQuizzes = (completedQuizzes / totalQuizzes) * 100

    // retorna  estudiantes con su progreso correspondiente 
    const usersWithStats = {
      name: user.name.toLowerCase(),
      stats: {
        percent: percent,//isNAN(Math.round(percent)) ? 0 : Math.round(percent),
        exercises: {
          total: totalExercises,
          completed: completedExcercises,
          percent: percentExercises,
        },
        reads: {
          total: totalReads,
          completed: completedReads,
          percent: Math.round(percentReads),
        },
        quizzes: {
          total: totalQuizzes,
          completed: completedQuizzes,
          percent: Math.round(percentQuizzes),
          scoreSum: Math.round(scoreSum),
          scoreAvg: Math.round(scoreAvg),
        }
      }
    }
    return usersWithStats
  });
  return newArrUsers
};

// funcion ordena la lista de usuarios creada con computeUsersStats en base a orderBy y OrderDirection
window.sortUsers = (users, orderBy, orderDirection) => {
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

    return listOrder.sort(function (a, b) {
      const percentA = a.stats.percent, percentB = b.stats.percent
      if (percentA > percentB) {
        return 1;
      }
      if (percentA < percentB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }
  // return a.stats.percent - b.stats.percent;

  if (orderBy === "percent" && orderDirection === 'DESC') {
    return listOrder.sort(function (a, b) {
      const percentB = b.stats.percent, percentA = a.stats.percent
      if (percentA < percentB) {
        return 1;
      }
      if (percentA > percentB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor 
    });
  }

  if (orderBy === "exercises" && orderDirection === 'ASC') {
    return listOrder.sort(function (a, b) {
      const excercisesA = a.stats.exercises.completed, excercisesB = b.stats.exercises.completed
      if (excercisesA > excercisesB) {
        return 1;
      }
      if (excercisesA < excercisesB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }

  if (orderBy === "exercises" && orderDirection === 'DESC') {
    return listOrder.sort(function (a, b) {
      const excercisesB = b.stats.exercises.completed, excercisesA = a.stats.exercises.completed
      if (excercisesA < excercisesB) {
        return 1;
      }
      if (excercisesA > excercisesB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor 
    });
  }

  if (orderBy === "quizz" && orderDirection === 'ASC') {
    return listOrder.sort(function (a, b) {
      const quizzA = a.stats.quizzes.completed, quizzB = b.stats.quizzes.completed
      if (quizzA > quizzB) {
        return 1;
      }
      if (quizzA < quizzB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }
  if (orderBy === "quizz" && orderDirection === 'DESC') {
    return listOrder.sort(function (a, b) {
      const quizzB = b.stats.quizzes.completed, quizzA = a.stats.quizzes.completed
      if (quizzA < quizzB) {
        return 1;
      }
      if (quizzA > quizzB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }

  if (orderBy === "quizzAvg" && orderDirection === 'ASC') {
    return listOrder.sort(function (a, b) {
      const quizzA = a.stats.quizzes.scoreAvg, quizzB = b.stats.quizzes.scoreAvg
      if (quizzA > quizzB) {
        return 1;
      }
      if (quizzA < quizzB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }
  if (orderBy === "quizzAvg" && orderDirection === 'DESC') {
    return listOrder.sort(function (a, b) {
      const quizzB = b.stats.quizzes.scoreAvg, quizzA = a.stats.quizzes.scoreAvg
      if (quizzA < quizzB) {
        return 1;
      }
      if (quizzA > quizzB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });

  }

  if (orderBy === "reads" && orderDirection === 'ASC') {
    return listOrder.sort(function (a, b) {
      const quizzA = a.stats.reads.completed, quizzB = b.stats.reads.completed
      if (quizzA > quizzB) {
        return 1;
      }
      if (quizzA < quizzB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }

  if (orderBy === "reads" && orderDirection === 'DESC') {
    return listOrder.sort(function (a, b) {
      const readsB = b.stats.reads.completed, readsA = a.stats.reads.completed
      if (readsA < readsB) {
        return 1;
      }
      if (readsA > readsB) {
        return -1;
      }
      return 0; //cuando no puede retornar un valor
    });
  }
}

window.filterUsers = (users, search) => {

  const filUsers = users.filter(user => {
    return user.name.toLowerCase().indexOf(search.toLowerCase()) > -1;

  });

  return filUsers;

}

window.processCohortData = (options) => {
  let courses = Object.keys(options.cohort.coursesIndex);
  let totalStudents = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);

  totalStudents = sortUsers(totalStudents, options.orderBy, options.orderDirection);

  if (options.search !== '') {
    totalStudents = filterUsers(totalStudents, options.search);
  }
  return totalStudents;
}

