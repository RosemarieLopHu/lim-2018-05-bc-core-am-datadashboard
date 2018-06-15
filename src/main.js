/*creo una funcion que manejara la respueta exitosa
 *una vez envidada la peticion al servidor
 */

function Success () {
    console.log( 'todo fino' );
//console.log( this.responseText );
const data=JSON.parse(this.responseText);

//muestra la lista de cohorts en la consola
console.log(data);

//muestra la lista de cohorts en el index.html
var x="";
for (i = 0; i < data.length; i++) {
  x += data[i].id + "<br>";
}

document.getElementById("cohorts").innerHTML = x;

}


/*Creo una fincion que manejara los errores en caso
*que hubiere para asi poder identificarlo.
*/

function Errores () {
console.log( 'A ocurrido un error ??' );
}

const xhr= new XMLHttpRequest();
xhr.open('GET', '../data/cohorts.json');
//xhr.responseType = 'text';
xhr.onload = Success;
xhr.onerror = Errores;
xhr.send();
