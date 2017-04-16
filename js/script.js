// Створити масив styles з елементами Джаз, Блюз;
// Добавити в кінець масиву значення Рок-н-Ролл;
// Замінити передостаннє значення з кінця на Класика. Код заміни передостаннього елементу повинен працювати для масиву любої довжини;
// Видалити перше значення масиву і вивести його в alert;
// Добавити в початок масиву значення Реп і Реггі, вивести масив.

var styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles[ styles.length - 2 ] = "Классика";
var first = styles.shift();
alert(first);
styles.unshift("Рэп", "Регги")
console.log( styles );

// Створити калькулятор для введених значень, який:
// Запитує значення почерзі задопомогою (prompt) і записує в масив;
// Закінчувати ввід якщо користувач введе пусту стрічку або нажме Відміна;
// 0 не повинен закінчувати ввід, це дозволене число;
// Виводимо суму всіх значень масиву;
// Додатково можна зробити перевірку чи введені дані є числом, якщо ні, то виводимо помилку;
 
var numbers = [],
    elem = 0,
    sum = 0;


 while (true) {
    elem = prompt( "Введите число", "" );

    if (  elem === null || elem === "" || isNaN(elem) ){
    	break
    } 
    else if ( isNaN(elem) ) {
        console.log("Вы ввели не число");
    };

    numbers.push( +elem );
 };

 for (var i = 0; i < numbers.length; i++) {
   	sum += numbers[i];
   }

 console.log( "Сумма элементов: " + sum );


// Написати код, який отримає елемент HEAD;
// Написати код, який отримає UL;
// Написати код, який отримає другий LI.
// Написати код, який додасть ще однин LI зі значенням Синій;
// Додати кожному LI класс, бажано це зробити задопомогою js і для кожного LI поміняти колір тексту відповідно до контенту;

var head,
    ul,
    secondLi,
    newLi,
    liElements;

head = document.head;
ul = document.querySelector('ul');
secondLi = document.querySelector('li')[1];
newLi = document.createElement('li');
newLi.innerHTML = 'Cиний';
ul.appendChild(newLi);
liElements = document.querySelectorAll('ul > li');

for (var i = 0; i < liElements.length; i++) {
	liElements[i].classList.add('list-item');
};

liElements[0].style.color = 'yellow';
liElements[1].style.color = 'green';
liElements[2].style.color = 'blue';

//почему то appendChild у меня не работает если ul выбирать 
//через getElementsByTagName('ul'), а работает если выбирать через
//querySelectorAll('ul > li'), почему так?


