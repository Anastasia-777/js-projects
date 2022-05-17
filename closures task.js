// Если переменная a больше нуля - то в переменную запишем функцию, которая выводит "да", иначе запишем функцию, которая выводит "нет"

if (a > 0) {
    let tr = function () {
        console.log('да');
    }
} else {
    let fal = function () {
        console.log('нет')
    }
}

// Сделайте функцию, которая считает и выводит количество своих вызовов 

function foo() {
    let i = 1;
    return function () {
        return i++;
    }
}
let func = foo();
console.log(func());

// Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст кнопки.
// Количество нажатий для каждой кнопки должно хранится в замыкании

<html>
    <button>Счет: 0</button>
    <button>Счет: 0</button>
    <button>Счет: 0</button>
</html>

function foo() {
    let count = 0;

    return function () {
        this.innerHTML = 'Счет: ' + count;
        count++;
    }
}

let btn = document.getElementsByTagName('button');

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', foo());
}