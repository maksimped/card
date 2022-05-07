//  Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let out = '';
function t1() {
for(let i =1; i<=16;i++){
    out+= i + '_'
}
document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_
//Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
let out2 = '';
function t2() {
for(let i = 12; i <=38; i++){
 if(i % 2 == 0){
     out2+= i + '_';
 }
}
document.querySelector('.out-2').innerHTML = out2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
let out3 = '';
function t3() {
for(let i = 25; i>=7; i--){
    out3+= i +'_'
}
document.querySelector('.out-3').innerHTML = out3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let out4 = '';
function t4() {
for(let i = 77; i >=35; i=i-3){
  out4 += i + '_'  
}
document.querySelector('.out-4').innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
let out5 = '';
function t5() {
for(let i = 1; i<=17;i++){
    if(i % 2 == 0){
        out5+= i + '_**';
    }else{
        out5+= i + '_*';
    }
}
document.querySelector('.out-5').innerHTML = out5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//
let out6 = '';

function t6() {
    let i6 = document.querySelector('.i-6').value;
for(let i = 0;i < i6; i++){
    out6 += '******' + '<br>';
}
document.querySelector('.out-6').innerHTML = out6

}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция t7, которая выводит в .out-7 числа от введенного пользователем до нуля включительно.
// Разделитель - знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла.
let out7 = '';
function t7() {
    out7= ''
    let i7 = document.querySelector('.i-7').value;
for(let i = i7; i >=0; i--){
    out7 += i + '_';
}
document.querySelector('.out-7').innerHTML = out7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция t8, которая выводит в .out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//  4_5_6_7_8_
// Задача решается с помощью цикла.
let out8 = '';
function t8() {
    
let i8_1 = document.querySelector('.i-81').value;
let i8_2 = document.querySelector('.i-82').value;
for(let i = i8_1; i <= i8_2;i++){
    out8 += i + '_';
}
document.querySelector('.out-8').innerHTML = out8
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция t9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель - подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
let out9 = '';

function t9() {
    let out9 = '';
    let input1 = document.querySelector('.i-91').value;
    let input2 = document.querySelector('.i-92').value;
   let a = '';
   let b = '';
if(input1 > input2){
  a = input2;
  b = input1; 
}else{
    a = input1;
    b = input2;
}
for(let i = a; i <= b; i++ ){
    out9 += i + '_';
}
document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1970 включительно.
// Разделитель - знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).
let out10 = '';
function t10() {
for(let i = 1950; i <= 1970; i++){
    if(i % 2 == 0){
        out10 += i + '_'
    }
}
document.querySelector('.out-10').innerHTML = out10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка .b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11 в переменную divs11
// перебрать их с помощью цикла. Обращение к div выглядит так divs[i].innerHTML
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_

let out11 = '';
function t11() {
let divs11 = document.querySelectorAll('.div-11');
for(let i = 0; i < divs11.length; i++){
    out11 += divs11[i].innerHTML + '_';
}
document.querySelector('.out-11').innerHTML = out11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let out12 = '';
function t12() {
let divs12 = document.querySelectorAll('.div-12');
for(let i = 0; i < divs12.length; i++){
    out12 += divs12[i].style.background = 'orange'
}

}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// С помощью цикла присвойте всем input .i-13 value равное 1 для первого, 2 для второго и 3 для третьего.

function t13() {
    let count = 1;
let inputs = document.querySelectorAll('.i-13');
for(let i = 0; i < inputs.length;i++){
    
        inputs[i].value = count;
        count ++
    
    
}
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let out14 = ''
let radio = document.querySelectorAll('.i-14');
for(let i = 0; i < radio.length;i++){
    if(radio[i].checked){
        out14 += radio[i].value;
    }
  
}
document.querySelector('.out-14').innerHTML = out14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Подсказка (10 - i) + '_' + i + '_'
let out15 = '';
function t15() {
for(let i = 0; i <= 10; i++){
    out15 += (10 - i) + '_' + i + '_'
}
document.querySelector('.out-15').innerHTML = out15;
}

document.querySelector('.b-15').onclick = t15;
