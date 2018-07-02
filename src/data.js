window.computeUsersStats = (users, progress, courses) => {
  // primera función: crea la lista de usuarios, los recorre y caldula los valores de progreso de cada uno, 
  // esta función devuelve un nuevo arreglo de usuarios donde a cada objeto de los mismos se le agrega la propiedad stats, con estadisticas calculadas.
  const usersWithStats = users.map(function (user) {
    if (progress[user.id].hasOwnProperty('intro')) {
      const userUnits = progress[user.id].intro.units;
      // se inicializa en cero para luego hacer un contador
      let totalExcercises = 0;
      let completedExercises = 0;
      let totalReads = 0;
      let completedReads = 0;
      let totalQuizzes = 0;
      let completedQuizzes = 0;
      let scoreSum = 0;
      let scoreAvg = 0;
      // Iteración de las unidades
      Object.keys(userUnits).forEach((unitName) => {
        const parts = userUnits[unitName].parts
        Object.keys(parts).forEach((partName) => {
          const part = parts[partName];
          if (part.hasOwnProperty('exercises')) {
            const exercises = part.exercises;
            Object.keys(exercises).forEach((exerciseName) => {
              const excercise = exercises[exerciseName]
              totalExcercises += 1;
              completedExercises += excercise.completed;
            })
          }
          if (part.hasOwnProperty('type')) {
            if (part.type === 'read') {  // comprobamos las lecturas completadas
              totalReads += 1;
              completedReads += part.completed
            }
            if (part.type === 'quiz') {
              totalQuizzes += 1;
              completedQuizzes += part.completed;
              scoreSum += part.score;
              scoreAvg = scoreSum / completedQuizzes //sacando e promedio
            }
          }
        })
      })
      const percentCompleted = (completedExercises / totalExcercises) * 100
      const percentReads = (completedReads / totalReads) * 100
      const percentQuizzes = (completedQuizzes / totalQuizzes) * 100

      console.log(user.id, 'Percent completeted', percentCompleted)
      console.log(percent)
      console.log(totalQuizzes)
      console.log(completedQuizzes)
      console.log(scoreSum)
      console.log(scoreAvg)
    }
  });
  //console.log(usersWithStats)
  return usersWithStats;
}
//segunda función
//se ordenara de forma alfabetica los nmbres de las alumnas

window.sortUsers = (users, orderBy, orderDirection) => {
  if (orderBy === "name") {
    return users.sort(function (a, b) {
      if (orderDirection == "ASC") {
        return a.name.localeCompare(b.name); //aqui comprarmos los nombres de las alumnas
      } else {
        return a.name.localeCompare(b.name) * -1; //orden descendente
      }
    });
  }

  if (orderBy === "percent") {
    return users.sort((a, b) => {
      if (orderDirection == "ASC") {
        return a.stats.percent - b.stats.percent;
      } else {
        return (a.stats.percent - b.stats.percent) * -1;
      }
    });
  }
};

window.filterUsers = (users, search) => {
  if (search) {
    if (users) {
      search = search.toLowerCase();
      return users.filter(user => user &&
        user.name &&
        user.name.toLowerCase().indexOf(search) >= 0);
    }
  }
  return users;
};


