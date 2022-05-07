// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */




function t1() {


    document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').textContent;

}
document.querySelector('.div-1').onclick = t1
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {

    document.querySelector('.out-2').innerHTML = (event['altKey'])



}

document.querySelector('.div-2').onclick = t2



// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    document.querySelector('.out-3').innerHTML = document.querySelector('.div-3').style.width = w3 + 'px';
    w3 = w3 + 5;

}
document.querySelector('.div-3').onclick = t3

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    document.querySelector('.out-4').innerHTML = document.querySelector('.div-4').textContent;

}
document.querySelector('.div-4').ondblclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let div5 = document.querySelector('.div-5');

function t5() {

    if (div5.classList.contains('active')) {
        div5.classList.remove('active')

    } else {
        div5.classList.add('active');
    }

}


div5.ondblclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
let ul6 = document.querySelector('.ul-6');

function t6() {
    if (ul6.classList.contains('hide')) {
        ul6.classList.remove('hide')

    } else {
        ul6.classList.add('hide');
    }

}
document.querySelector('.div-6').ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector('.div-7')

function t7() {
    if (div7.classList.contains('active')) {
        div7.classList.remove('active')

    } else {
        div7.classList.add('active');
    }
    return false;
}
document.querySelector('.div-7').oncontextmenu = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let check_box = document.querySelector('.ch-8');

function t8() {

    if (check_box.checked == true) {
        document.querySelector('body').oncontextmenu = function () {
            return false
        };
    } else {
        document.querySelector('body').oncontextmenu = function () {
            return true
        };

    }

}
check_box.onchange = t8

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let div9 = document.querySelector('.div-9 img ');


function t9() {
    div9.setAttribute('src', "img/2.png")
    return false;
}
div9.oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
let div10 = document.querySelector('.div-10 img');

function t10() {
    div10.setAttribute('src', "img/2.png")

}
div10.onmouseenter = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let div11 = document.querySelector('.div-11 img');

function t11() {
    div11.setAttribute('src', "img/1.png")

    function t11_1() {
        div11.setAttribute('src', "img/2.png")
    }
    div11.onmouseenter = t11_1;
}

div11.onmouseleave = t11
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
let div12 = document.querySelector('.div-12');

function t12() {
    div12.classList.add('active');
}
div12.onmousedown = t12;
// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let div13 = document.querySelector('.div-13');
div13.onmousedown = () => {
    div13.classList.add('active');
}

div13.onmouseup = () => {
    div13.classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
let div14 = document.querySelector('.div-14');

function t14() {
    div14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let div15 = document.querySelector('.div-15');


function t15() {
    div15.innerText++;

}
div15.onmousemove = t15
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let w = 75;
let div16 = document.querySelector('.div-16');


function t16() {
    w++
    div16.style.width = w + 'px';


}
div16.addEventListener("mousemove", t16)
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
let b17_on = document.querySelector('.b-17_on');
let b17_off = document.querySelector('.b-17_off');

function t17On() {
    div16.addEventListener("mousemove", t16);
}

function t17Off() {
    div16.removeEventListener("mousemove", t16);

}
b17_on.onclick = t17On;
b17_off.onclick = t17Off;

// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let div18 = document.querySelector('.div-18');


function t18() {
    div18.innerHTML = div18.offsetWidth - 1;
}
div18.addEventListener('mouseenter', t18)
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let div19 = document.querySelector('.div-19');


function t19() {
    div19.innerHTML = div19.classList;
}

div19.addEventListener('mouseout', t19)
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let prog = document.querySelector('progress');


function t20() {
    prog.value++

}
prog.onmousemove = t20;
// ваше событие здесь!!!