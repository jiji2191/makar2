1.
let a = 1;
let b = 2;
let c = 'белых медведей';

console.log(a+''+b+c);



2.
let a1 = 16;
let a2 = 800;
let a3 = 3916;
let a4 = 379;
let a5 = 2184;

console.log((5 + 3)*(5-3));
console.log((10-6)*200);
console.log((534*132)/18);
console.log(123*3+10);
console.log(12*13*14);

console.log(a1+' '+a2+' '+a3+' '+a4+' '+a5);



3.
str = 'Привет'
num = 123;
flag = true;
txt = 'true'

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);



4.
"usestrict";

let a = 10;
let b = 2;
let c = 5;

alert(a+b+c);
console.log(a+b+c);


5.
"usestrict";

let age = 20;

console.log(`'Мне ${age} лет !'`);


6.
"usestrict";

let hour = 15;
let minutes = 'минута'
let seconds = 'секунда'

console.log(`'${hour}:${minutes}:${seconds}'`);








const RATE = 0.12;
const YEAR = 5;

function calc(money) {
    return money * RATE * YEAR
    
}

function formatMoney(money) {
    return money + '$'
}

let result = calc(10000);
let formatedResult = formatMoney(result)


console.log(formatedResult);








// "use strict"

// function getUserData() {
//     let name = prompt('Ваше имя');
//     let secondName = prompt('Ваше фамилия');

//     let user = {
//         name: name,
//         secondName: secondName
//     }

//     return user
// }

// console.log(getUserData());





// "use strict"

// const hrSalarys = {
//     dima: 7000,
//     olya: 12000,
//     maxim: 3000,
// }

// function calcMiddleSalary(department){
//     let total = 0;
//     let count = 0;

//     for(let person in department){
//         total = total + department[person]
//         count = count + 1
//     }
//     return total / count
// }

// console.log(calcMiddleSalary(hrSalarys));






"use strict"

function getUserData() {
    let UserLogin = prompt('Ваш логин');
    let userPassword = prompt('Ваш пароль');

    let user = {
        login: UserLogin,
        password: userPassword
    }

    return user
}

console.log(getUserData());

function dataComprasion() {
    let loginComprasion = prompt('Подтвердите ваш логин');
    let passwordComprasion = prompt('Подтвердите ваш пароль');

    let a = getUserData()

    if (a.login === loginComprasion && a.password === passwordComprasion) {
        console.log('Добро пожаловать');
    } else {
        console.log('Данные введены неверно');
    }

}

console.log(dataComprasion());




/*Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. */
"use strict"

function transform(score) {
    let firstTeam = score.charAt(0);
    let secondTeam = score.charAt(2);

    let numbers = {
        '0' : 'ноль',
        '1' : 'один',
        '2' : 'два',
        '3' : 'три',
        '4' : 'четыре',
        '5' : 'пять',
        '6' : 'шесть',
        '7' : 'семь',
        '8' : 'восемь',
        '9' : 'девять',
    }
    console.log(numbers[firstTeam] + ':' + numbers[secondTeam]);
}

console.log(transform('2:5'));





function computeSquers() {
    let array = []
    for(let i = 0; i < 100; i++) {
        array.push (i * i);
    }
    return array;
}

console.log(computeSquers());



function max(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}



console.log(max([4, 3571, 2, 12515]));




function cuteArray(arr) {
    
    arr.length = 4
    return arr
}


console.log(cuteArray([1, 2, 3, 4, 5, 6]));





// "use strict"

// let persons = [
//     {id: 10, name: 'Vasya', age: 28},
//     {id: 11, name: 'Kolya', age: 16, parentId: 14},
//     {id: 12, name: 'Anna', age: 37},
//     {id: 13, name: 'Zoya', age: 9, parentId: 12},
//     {id: 14, name: 'Arkadiy', age: 45},
// ];


// function setUserProfission(data) {

//     for(let person of data) {
//         if(person.age >= 18) {
//             person.profession = prompt(`${person.name} Ваша профессия?`)
//         }
//     }
//     return data
// }



// console.log(setUserProfission(persons));"use strict"

// let persons = [
//     {id: 10, name: 'Vasya', age: 28},
//     {id: 11, name: 'Kolya', age: 16, parentId: 14},
//     {id: 12, name: 'Anna', age: 37},
//     {id: 13, name: 'Zoya', age: 9, parentId: 12},
//     {id: 14, name: 'Arkadiy', age: 45},
// ];


// function setUserProfission(data) {

//     for(let person of data) {
//         if(person.age >= 18) {
//             person.profession = prompt(`${person.name} Ваша профессия?`)
//         }
//     }
//     return data
// }



// console.log(setUserProfission(persons));






"use strict"

function User(age, iq, mood, job) {
    this.age = age;
    this.iq = iq;
    this.mood = mood;
    this.job = job;

    this.printAge = function () {
        console.log(`мой возраст ${this.age}`);
    }

    this.printIq = function () {
        console.log(`мой iq ${this.iq}`);
    }

    this.printMood = function () {
        console.log(`моё настроение ${this.mood}`);
    }

    this.printJob = function () {
        console.log(`я работаю ${this.job}`);
    }
}


let user = new User(20, 140, "happy", "developer");

user.printAge()
user.printIq()
user.printJob()
user.printMood()






"use strict"

function Calculator(a, b) {
    this.read = function() {
        // this.a = +prompt('первое число', 0);
        // this.b = +prompt('второе число', 0);
        this.a = a;
        this.b = b;
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

    this.div = function() {
        return this.a / this.b;
    };

    this.sub = function() {
        return this.a - this.b;
    };
}

let calculator = new Calculator(2, 2);
calculator.read();

console.log('сумма = ' + calculator.sum());
console.log('произведение = ' + calculator.mul());
console.log('деление = ' + calculator.div());
console.log('вычитание = ' + calculator.sub());




"use strict"
let persons = [
        {name: 'Vasya', age: 28},
        {name: 'Kolya', age: 16, parentId: 14},
        {name: 'Anna', age: 37},
        {name: 'Zoya', age: 16, parentId: 12},
        {name: 'Arkadiy', age: 45},
    ];

function foo (operation, age) {
   if(operation === 'find') {
    return persons.find(persons => persons.age === age)
   }

   if(operation === 'filter') {
       return persons.filter(persons => persons.age === age)
   }
    
   
}


console.log(foo('filter', 16));

