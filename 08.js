/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
        // number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
        // la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16


    
function countDeep(arr) {
  // Tu código aca:
  let number = 0;
  let strings = 0;
  let boolean = 0;
  let undefined = 0;
  let array = 1;
  arr.forEach (function (element) {
    if (Array.isArray (element)) {
      array++;
      array = array + countDeep (element);
      number = number + countDeep (element);
      strings = strings + countDeep (element);
      boolean = boolean + countDeep (element);
      undefined = undefined + countDeep (element);
    } else {
      if (typeof (element) === 'number') {
        number++;
      }
      if (typeof (element) === 'string') {
          strings++;
      }
      if (typeof (element) === 'boolean') {
            boolean++;
      }
      if (typeof (element) === 'undefined') {
              undefined++;
      }

    } 
  });
  return Math.pow ((((array - number) * strings) / boolean), undefined);
};

    
 
// No modifiques nada debajo de esta linea //

module.exports = countDeep