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

// Задача 3. Добавить к конструктору объектов Browser внешний метод aboutBrowser, который будет выводить на экран обозревателя информацию о свойствах этого объекта

function aboutBrowser() {
    console.log(`${this.name}, ${this.version}`);
}

class Browser {
    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.showInfo = aboutBrowser;
    }
}

const show = new Browser('Yandex', '24.474.00');
show.showInfo();

/* Задача 4. Создать класс объектов (Tour) для работы туристической фирмы с методом подсчета стоимости поездки из расчета:
количества человек * количество дней * тариф страны. Создать экземпляр объекта turkeyTour со значениями свойств. Вывести все свойства объекта на экран.
Метод объекта расчет создавать на основе функции. */

class Tour {
    constructor(countPerson, countDay, rate) {
        this.countPerson = countPerson;
        this.countDay = countDay;
        this.rate = rate;
        this.calc = function () {
            console.log(`Подсчет стоимости поездки: ` + countPerson * countDay * rate);
        }
    }
}
const turkeyTour = new Tour(12, 6, 1000);
turkeyTour.calc();

/* Задача 5. К классу String добавить метод printMe(), который выводит слово «Ура!» как заголовок (тег <h>), указанного пользователем уровня (prompt)  */

function listenHeader() {
    let count = +prompt('Введите уровень заголовка от 1 до 6 : ');
    return count;
}

class StringCount {
    constructor(header) {
        this.header = header;
        this.printMe = function () {
            console.log(`<h${this.header}> УРА! <h${this.header}>`);
        }
    }
}

const print = new StringCount(listenHeader());
print.printMe(); 
