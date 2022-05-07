//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
class Valid2 extends Valid {
    constructor(email, password, isValid = false, emailError = '', passwordError = '') {
        super(email, password, isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        super.validate();
        if (this.email.length == '') {
            this.isValid = false;
            console.log(this.emailError)
        }


    }
}


//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let valid2 = new Valid2('', 'q1322122122', false, 'email empty', 'min length 6');
let t11 = valid2.validate();

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let valid3 = new Valid2('name@gmail.com', '122', false, 'email empty', 'min length 6');
let t12 = valid3.validate();