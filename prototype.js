/* Задача 1. Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд. После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000);

*/

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

let foo = function () {
    console.log("Hello");
}

foo.defer(5000);
