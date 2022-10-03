'use strict';

let userName = prompt('Введите Ваше имя', '');

document.getElementById("userName").innerHTML =
    (userName === '' || userName === null) ?
    'Гость' : userName;