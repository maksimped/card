 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
 class Goods {
     constructor(name, amount, image, count) {
         this.name = name;
         this.amount = amount;
         this.image = image;
         this.count = count;


     }
     draw() {



         let div = document.createElement('div');

         let p = document.createElement('p');
         p.innerText = this.name;
         div.append(p);

         let a = document.createElement('p');
         a.innerText = this.amount;
         div.append(a);



         let img = document.createElement("img");
         div.append(img);
         img.setAttribute('src', '');
         img.src = this.image;
         img.style.width = '200px'


         let c = document.createElement('p');
         c.innerText = this.count;
         div.append(c);




         return div;
     }

 }


 let t1 = new Goods('Egipt', '39 908 ₴', 'https://cdn.rozetka.travel/hotels/03549894-ad9d-47c6-a4c8-f6010bc91df3/5c89ab47-7f16-4195-b695-1f154d63e258.jpg', 6);
 t1.draw();

 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.
 //  
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).


 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
 let goods2 = new Goods('Egipt', '39 908 ₴', 'https://cdn.rozetka.travel/hotels/03549894-ad9d-47c6-a4c8-f6010bc91df3/5c89ab47-7f16-4195-b695-1f154d63e258.jpg', 6, 'true');

 let t4 = goods2.draw()
 document.querySelector('.out-4').append(t4);
 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.


 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.


 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.


 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.


 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.


 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.


 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.


 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.