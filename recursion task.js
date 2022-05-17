// Задача 1. С помощью рекурсии выведите числа от 1 до 10

let i = 1;

function foo() {
    console.log(i);
    i++;

    while (i <= 10) {
        foo();
    }
}

foo();

// Задача 2. Напишите программу для вычисления факториала числа

function foo(n) {
    if (n == 0) {
        return 1;
    }

    return n * foo(n - 1);
}

console.log(foo(6));
