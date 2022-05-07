// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML += 'touch';
}
document.querySelector('.div-1').addEventListener("touchstart", t1)
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count1 = 0;

function t2() {
    count1++
    document.querySelector('.out-2').innerHTML = count1;

}
document.querySelector('.div-2').addEventListener("touchstart", t2)
// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let div3_1 = document.querySelector('.div-3_1');
let div3_2 = document.querySelector('.div-3_2');

function t3(event) {
    if (event.target == div3_1) {
        document.querySelector('.out-3').innerHTML = 1;
    } else {
        document.querySelector('.out-3').innerHTML = 2;
    }


}
div3_1.addEventListener("touchstart", t3)
div3_2.addEventListener("touchstart", t3)


// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
let btn4 = document.querySelector('.b-4');
let div4 = document.querySelector('.div-4');

function t4() {
    div4.ontouchend = t6;
    div4.ontouchstart = action;


    function action() {
        document.querySelector('.out-4').innerHTML += 'touch';

    }
}
btn4.onclick = t4
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
let btn5 = document.querySelector('.b-5')

function t5() {
    div4.ontouchstart = false;
}
btn5.onclick = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML += 'touchend'
}
div4.ontouchend = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.backgroundColor = 'red';
}
document.querySelector('.div-7').ontouchstart = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let div8 = document.querySelector('.div-8');
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    let rand = Math.floor(Math.random() * a8.length);

    div8.style.backgroundColor = a8[rand];
}
div8.ontouchstart = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let div9 = document.querySelector('.div-9');

function t9(e) {

    document.querySelector('.out-9').innerHTML = e.touches.length;
}
div9.ontouchstart = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w10 = 75

function t10() {
    document.querySelector('.div-10').style.width = w10 + 'px'
    w10++
}
document.querySelector('.div-10').ontouchmove = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
let div11 = document.querySelector('.div-11')

function t11(e) {
    document.querySelector('.out-11').innerHTML = e.touches[0].radiusX + ' ' + e.touches[0].radiusY;
}
div11.ontouchstart = t11
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next.ontouchstart = nextFunction;

const reset = document.querySelector('.reset');
reset.ontouchstart = resetFunction;

const prev = document.querySelectorAll('.prev');
prev.ontouchstart = prevFunction;

let max_img = document.querySelector('.img-12-max');

function resetFunction() {
    if (count > 0) {
        images[count].classList.remove('active-img');
    }
    count = 0;
    max_img.src = images[0].src
    images[count].classList.add('active-img');

}


function prevFunction() {
    if (count > 0) {
        count--
    } else {
        count = images.length - 1;

    }


    for (let key of images) {
        key.classList.remove('active-img')

    }
    images[count].classList.add('active-img');
    max_img.src = images[count].src
}


function nextFunction() {
    if (count + 1 < images.length) {
        count++

    } else {
        count = 0;

    }
    for (let key of images) {
        key.classList.remove('active-img')

        max_img.src = images[count].src


    }
    images[count].classList.add('active-img');

}




reset.onclick = resetFunction;
next[0].onclick = nextFunction;
prev[0].onclick = prevFunction;

// ваше событие здесь!!!