"use strict";
/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
// "* Если чётное — функция возвращает `true`, если нечётное — `false`." --- не понял это условие
function getDivisors(num) {
    if (typeof num !== "number")
        return "Error: parameter type is not a Number";
    if (num === 0)
        return "Error: parameter can't be a 0";
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (!(num % i))
            arr.push(i);
    }
    return arr;
}

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
