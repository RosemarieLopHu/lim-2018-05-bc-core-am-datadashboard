//crenado la primera funcion
window.computeUserStats= (users, progress)=>{
//definiendo el total de ejercicios
const userWithStats= user.map(function(obj){ //crenado constante= recorrido con map el objeto y retornando un nuevo array
  if(progress[obj.id].hasOwnProperty('intro')){//hasOwnProperty= me trae una propiedad especifica y se usa cuando un objeto desciende de otro objeto
   const userUnits= progress[obj.id].intro.units;
   const totalExcercises = 0;
   const completedExercises=0;
   Object.key(userUnits).forEach((unitName) => { // object key me retorna un array de las propiedades enumerables de un objeto, el metodo foreash me recorre por nombre de unidad
    const parts= userUnits[unitName].parts
    Object.key(parts).forEach((partName)=>{ // me retorna un array de las propiedades enumerables de del objeto, for eash reccore  nombre de la propiedad parts
      const part= part[parName];
      if(part.hasOwnProperty('exercises')){
        const exercises= part.exercises;
        Object.key(exercises).forEach((exercisesName)=>{
          const exercises= exercises[exercisesName]
          totalExcercises += 1;// ejercicios completados 1, no completados 0 = suma siempre 1 a medida que va completando los ejercicicios
          completedExercises+=exercises.completed;
        })
      }
    })     
  })
  const percentCompleted= completedExercises / totalExcercises //sacando porcentaje dividiendo la cantidad de completados con el total d ejercicios 
  console.log(user.id, 'total completado' , percentCompleted);
  
}
}) ;
// recorriendo lecturas completadas 
const userUnits= progress[obj.id].intro.units;
const totalReads= 0;
const completedReads= 0;
Object.key(userUnits).forEach((unitName) => {
  const parts= userUnits[unitName].parts
  Object.key(parts).forEach((partName) => {
    const part= parts[partName];
    if(part.hasOwnProperty('type')){
       const type= part.type;
       Object.key(type).forEach((typeName) => {
        const type= read[typeName]
        totalReads +=1;
        completedExercises += exercises.completed;
    })
  }
 })
})
const percentCompleted= completedReads / totalReads
console.log(user.id, 'percent completed', percentCompleted)

const percent= progress[obj.id]. intro.percent;
}





  








  






