"use strict"

function user(gender) {
    if(gender === "макар") {
        return true;
    } else {
        return confirm('ты пиздишь?')
    }
}

let gender = prompt('your name');

if(user(gender)) {
    alert('ТЫ ПИДОР ЕПТА')
} else {
    alert('ТЫ НЕ ПИДОР ЕПТА')
}