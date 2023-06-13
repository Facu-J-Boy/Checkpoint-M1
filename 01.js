const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (this.head === null) {
    return false;
  } else {
  let arr = [];
  let current = this.head;
  while (current.next) {
    arr.push(current.value);
    current = current.next;
  }
  if (current.next === null) {
    arr.push(current.value);
  }
  arr.sort (function (a, b) {return b - a;});
  this.head = null; 
  arr.forEach (element => this.add(element));
}
return this.head;
};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};