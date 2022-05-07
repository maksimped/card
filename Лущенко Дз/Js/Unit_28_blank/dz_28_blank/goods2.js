//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count)

        this.sale = sale;

    }
    draw() {

        let draw2 = super.draw();

        let s = document.createElement('p');
        s.innerText = this.sale;
        draw2.append(s)
        return draw2;
    }

}


// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
let goods3 = new Goods2('Egipt', '39 908 ₴', 'https://cdn.rozetka.travel/hotels/03549894-ad9d-47c6-a4c8-f6010bc91df3/5c89ab47-7f16-4195-b695-1f154d63e258.jpg', 6, true);
let t6 = goods3.draw();
document.querySelector('.out-6').append(t6)

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
class Valid {
    constructor(email, password, isValid = false) {
        this.email = email;
        this.password = password;

        this.isValid = isValid;

    }
    validate() {
        if (this.password.length >= 6) {
            this.isValid = true;

        } else {
            this.isValid = false;
            console.log('min length 6')
        }
        console.log(this.isValid)
    }

}

// let pas = new Valid('ksfj', '1313121')
// let t7 = pas.validate();
// console.log(t7)
//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let newUser = new Valid('Maksym', 'q13222223');
let t8 = newUser.validate();


//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let newUser2 = new Valid('Maksym', 'q132311');
let t9 = newUser2.validate();


//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.


//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.


//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.