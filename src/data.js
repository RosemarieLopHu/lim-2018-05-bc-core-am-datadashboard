window.computeUsersStats = (users, progress, courses) => {
  // primera función: crea la lista de usuarios, los recorre y caldula los valores de progreso de cada uno, 
  // esta función devuelve un nuevo arreglo de usuarios donde a cada objeto de los mismos se le agrega la propiedad stats, con estadisticas calculadas.
  const usersWithStats = users.map(function (user) {
    if (progress[user.id].hasOwnProperty('intro')) {
      const userUnits = progress[user.id].intro.units;
      let totalExcercises = 0;
      let completedExercises = 0;
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
        })
      })
      const percentCompleted = (completedExercises / totalExcercises) * 100
      console.log(user.id, 'Percent completeted', percentCompleted)
    }
  if (part.type === 'read') {   // lecturas
    lectures++;
  }
  if (part.type === 'read' && part.completed === 1) { // part.type === reads y part.completed es =1, xq incrementa el contador de lecturas que deben estar completadas. recordar part.type esta en el json
    lecturesCompleted++;
  }

  lecturesPercent = Math.round((lecturesCompleted * 100) / lectures);
  if (part.type === 'quiz') { // part.type es un quizz aumenta el contador de quizzes 
    quizzes++;
  }
  if (part.type === 'quiz' && part.completed === 1) {
    quizzesCompleted++;
    // saca la suma general para luego sacar el promedio
    scoreSum += part.score;
  }
  quizzesPercent = Math.round(quizzesCompleted * 100 * 10 / quizzes) // el math.round redondea decimales y los devuelve enteros           
  if (part.type === 'practice') {   // aqui declaramos si part.type es = a practice entonces aumenta el contador de exercises  
    exercises++;
  }
});

// sacando el promedio
scoreAvg = scoreSum / quizzes;  // promedio de puntuaciones en quizzes completados
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

return usersWithStats; // retornando los resultados
};

