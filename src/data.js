window.computeUsersStats = (users, progress, courses) => {
 let esto = users.map(
   (user) => {
     if (Object.keys(progress[user.id]).length ===0) {
       return user
     }  
          user.stats: {
            percent: percent,
            exercices: {
              total: practiceTotal,
              completed: practiceCompleted,
              percent: Math.round((practiceCompletes / practiceTotal)*100),
            },
            reads: {
              total: readsTotal,
              completed:readsCompleted,
              percent: Math.round((readsCompletes / readsTotal)*100),
            },
            quizzes: {
              total: quizzTotal,
              completed: quizzCompleted,
              percent: Math.round((quizzCompleted / quizzTotal)*100),
              scoreSum: scoreSumQuizz,
              scoreAvg: Math.round(scoreSumQuizz / quizzCompleted),
            }
          }
          return user;
        }
      }
    )
  }  
};
