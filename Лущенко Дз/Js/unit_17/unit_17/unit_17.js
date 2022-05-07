// для решения задач используйте эти переменные!!!!!
let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    a5_res = [],
    a6_res = [],
    a7_res = [],
    a8_res = [],
    a11_res = [],
    a15_res = [];

// нужно ли очищать данные переменные при запуске функции? Да, но именно очищать.


// Task 1 ============================================
/* Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Возвратите массив  a1_res. */

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
    a1_res = a1.map(elem => {
        return elem * 2;
    });
    return a1_res;
}

document.querySelector('.b-1').onclick = () => {
    console.log(t1());
}

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.*/

let a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {
    a2_res = a2.map(elem => {
        return elem ** 2;
    });
    return a2_res;
}

document.querySelector('.b-2').onclick = () => {
    console.log(t2());
}


// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a3_res куда добавьте все элементы преобразованные к числу. Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t3() {
    a3_res = a3.map(elem => {
        elem = +elem;
        return elem;

    });
    return a3_res;
}

document.querySelector('.b-3').onclick = () => {
    console.log(t3());
}


// Task 4 ============================================
/*  Функция t4 должна с помощью filter отфильтровать массив t4 и создать новый массив a4_res, куда добавить только числа из массива t4.  Функция должна возвращать a4_res. */

let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t4() {
    let a4_res = a4.filter(a4 => typeof (a4) == 'number');

    return a4_res;
}


document.querySelector('.b-4').onclick = () => {
    console.log(t4());
}



// Task 5 ============================================
/*  Дан массив a5 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте a5_res, который содержит только четные числа из a5. Возвратите a5_res. Действия должны запускаться при вызове функции t5. Проверьте, чтобы функция корректно работала со строками, т.е. '6' не должно попасть в результирующий массив.  */

let a5 = [3, 14, 15, 92, '6'];

function t5() {
    let a5_res = a5.filter(a5 => a5 % 2 == 0 && typeof (a5) == 'number');
    return a5_res;

}



document.querySelector('.b-5').onclick = () => {
    console.log(t5());
}



// Task 6 ============================================
/*  Дан массив a6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив a6 и создайте массив a6_res, который содержит только числа из a6, которые больше 14. Возвратите a6_res. Действия должны запускаться при вызове функции t6. */

let a6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
    let a6_res = a6.filter(a6 => a6 > 14 && typeof (a6) == 'number');
    return a6_res;
}

document.querySelector('.b-6').onclick = () => {
    console.log(t6());
}


// Task 7 ============================================
/*  Дан массив a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles']. C помощью map переберите массив a7 и создайте  a7_res, который содержит элементы массива a7 приведенные к нижнему регистру. Действия должны запускаться при вызове функции t7. Функция должна возвращать a7_res. */

let a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles'];

function t7() {
    let a7_res = a7.map(item =>
        item.toLowerCase()
    );
    return a7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
}

// Task 8 ============================================
/* Дан массив a8 = [3, 14, 15, 92, 7, 32, 59]. C помощью цикла или метода - решить самостоятельно, переберите массив a8 и добавьте в a8_res индексы четных элементов. Т.е. для данного примера по результату работы функции в a8_res должны быть [1, 3, 5]. Функция должна возвращать a8_res. */

let a8 = [3, 14, 15, 92, 7, 32, 59];


function t8() {
    let a8_res = [];
    for (let key in a8) {
        if (a8[key] % 2 == 0)
            a8_res.push(+key);
    }
    return a8_res;


}

document.querySelector('.b-8').onclick = () => {
    console.log(t8());
}



// Task 9 ============================================
/*  Дан массив a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal']. С помощью forEach, переберите массив a9 и преобразуйте все записи в массиве в нижний регистр. Действия должны запускаться при вызове функции t9. Функция должна возвращать a9. */

let a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal'];

function t9() {
    let a = [];
    a9.forEach(function (elem) {
        a.push(elem.toLowerCase())

        a9 = a;

    });
    return a9;
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
}



// Task 10 ============================================
/*  Дан массив a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью forEach, переберите массив a9 и элементы, которые меньше нуля замените на 0.  Возвратите a10. Действия должны запускаться при вызове функции t10.  Для данного примера результат должен выглядеть так: [2, 13, 14, 0, 9, 5, 0, 0, 14]*/

let a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

function t10() {
    let a = [];
    a10.forEach(function (elem) {
        if (elem < 0) {
            elem = 0;
        }
        a.push(elem);
        a10 = a;
    });
    return a10;

}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}

// Task 11 ============================================
/*  Дан массив a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью filter, переберите массив a11 и создайте новый массив a11_res куда добавьте только те элементы массива ИНДЕКС которых - четный. Возвратите a11_res.*/

let a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

function t11() {

    a11_res = a11.filter(function (elem, index) {
        if (index % 2 == 0) {
            return true;
        }

    });
    return a11_res

}

document.querySelector('.b-11').onclick = () => {
    console.log(t11());
}

// Task 12 ============================================
/*  Данa переменная a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода Array.isArray определите является ли переменная a12 массивом. Если да - то функция возврaщает true, если нет false.*/

let a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
// a12 = 8; // на этой переменной можно проверить работает или нет ваша функция.

function t12() {

    return Array.isArray(a12)
}

document.querySelector('.b-12').onclick = () => {
    console.log(t12());
}

// Task 13 ============================================
/*  Дан массив a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода includes функция t13 должна определить, есть ли значение из переменной a13_num в массиве. Если да - то функция возврaщает true, если нет false.*/

let a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
let a13_num = 9;


function t13() {
    let bool = a13.includes(a13_num);
    return bool;

}


document.querySelector('.b-13').onclick = () => {
    console.log(t13());
}

// Task 14 ============================================
/*  Дан массив a14 = ['c', 'C', 'd', 'e', 'E']. С помощью метода includes функция t14 должна определить, есть ли значение из переменной a14_sym в массиве. Если да - то функция возврaщает true, если нет false. Обратите внимание, функция должна искать независимо от регистра. Т.е. если в a14_sym будет строка 'd' то возвратить true, однако и на строку 'D' тоже возвратить true. */

let a14 = ['c', 'C', 'd', 'e', 'E', 'O'];
let a14_sym = 'o';


function t14() {
    let a = [];
    a14.forEach(elem => {
        a.push(elem.toUpperCase())
    });
    let bool = a.includes(a14_sym.toUpperCase());
    return bool;
}

document.querySelector('.b-14').onclick = () => {
    console.log(t14());
}

// Task 15 ============================================
/*  Дан массив a15. С помощью метода filter функция t15 должна создать на его основе массив a15_res содержащий записи только тех пользователей, номер паспорта (pnum) которых не пустая строка и длина номера - 6 символов. Функция должна возвращать a15_res.*/
/*
в данном примере нужно получить результат 
 [
    {
        "name" : "ivanov",
        "pnum" : 'tr7862'
    },
    {
        "name": "sedanov",
        "pnum": 'im7961'
    },
]
*/

let a15 = [{
        "name": "ivanov",
        "pnum": 'tr7862'
    },
    {
        "name": "petrov",
        "pnum": ''
    },
    {
        "name": "sedanov",
        "pnum": 'im7961'
    },
    {
        "name": "dou",
        "pnum": 'tr786259'
    },
];


function t15() {
    let a15_res = a15.filter(function (elem) {
        if (elem['pnum'] != '' && elem['pnum'].length == 6) {
            return true;
        }
    });
    return a15_res;


}

document.querySelector('.b-15').onclick = () => {
    console.log(t15());
}