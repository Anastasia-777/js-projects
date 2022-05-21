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

/* Задача 2. Создать класс объекта Car с тремя свойствами : name, model, color.
 Создать экземпляр класса с конкретными значениями свойств. Затем через созданный экземпляр добавить к классу свойство owner
 с конкретным значением по умолчанию (Ivanov). Вывести все значения свойств созданного экземпляра */

class Car {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }
}
const myCar = new Car('Audi', 'A6', 'black');
myCar.owner = 'Ivanov';

console.log(`${myCar.name}, ${myCar.model}, ${myCar.color}, ${myCar.owner}`);