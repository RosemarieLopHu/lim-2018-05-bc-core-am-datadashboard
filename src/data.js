window.computeUsersStats = (users, progress,courses) => {
  const usersWithStats = users.map(user => {
    const percentProgress = () => {
      const percent = [];
      Object.keys(progress[user.id]).map(course => {
        if (progress[user.id][course].hasOwnProperty('percent')) {
          percent.push(progress[user.id][course].percent);
        }
      });
      if (percent[0] === undefined) {
        return percent[0] = 0;
      } else {
        return percent[0];
      }
    }
    const exercisesTotal = () => {
      const total = [];
      Object.keys(progress[user.id]).map(course => {
        Object.keys(progress[user.id][course].units).map(leccion => {
          Object.keys(progress[user.id][course].units[leccion].parts).map(lectura => {
            if (progress[user.id][course].units[leccion].parts[lectura].hasOwnProperty('exercises')) {
              total.push(Object.values(progress[user.id][course].units[leccion].parts[lectura].exercises).length);
            }
          })
        })
      });
      if (total[0] === undefined) {
        return total[0] = 0;
      } else {
        return total[0];
      }
    }
    