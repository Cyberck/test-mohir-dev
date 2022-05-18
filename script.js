"use strict";


window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('li');
        function video() {
            
        }
});

















/* ***************************************************************************************************** */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"+
//         }
//     }

//     return str;
// }
// console.log(getMathResult(10, 5));
// getMathResult(10, 5);

/* *************************************************************************** */

// Код возьмите из предыдущего домашнего задания

// for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);

//     // Не трогаем
//     return result;
// }
// firstTask();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }
// secondTask();

// function secondTask() {
//     let result = '';
//     const asd = 7;
//     for (let i = 0; i < asd; i++) {
//         for (let j = 0; j <= i; j++) {
//             result += '*';
//         }
//         result += '\n';
//     }
//     console.log(result);

// }
// secondTask();


// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);

//     return result;
// }
// thirdTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

///* ********************** */

// const numberOfFilms = +prompt('Skolko filmov vi uje posmotreli?', '');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Odin iz prosmotrennih filmov?', ''),
//         b = prompt('Na skolko asenite ego?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
// }

// if (personalMovieDB.movies < 10) {
//     console.log('Prosmotreno davolno malo filmov');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Vi klassicheskiy zritel');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Vi kinoman');
// } else {
//     console.log('Proizoshlo oshibka');
// };

// console.log(personalMovieDB);

/* ******************** */

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(7, 1));


// const usdCurr = 28;
// const eurCurr = 32;
// const uanCurr = 10;

// function convert(amount, curr) {
//     console.log(amount * curr);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);
// convert(500, uanCurr);

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Alex');


/* ************** */
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

/* ************** */