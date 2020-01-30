//
// let login = prompt("Ваш логин");
// if (login = "Админ") {
// let password = prompt("Ваш пароль");
// } if (password  = "Я") {
//    alert("Здравствуйте");
//  } if (password = null) {
//    alert("Отменено");
//  } else {
//    alert("Пароль не верен");
//  }



let login = prompt("Ваш логин");
if (login == "Админ") {
   let password = prompt("Пароль?");
 /*}*/ if (password == "Я") {
  alert("Здравствуйте");
 } else if (password == null || password == "") {
   alert("Отменено");
 } else {
  alert("Неверный пароль");
}} else if (login == null || login == "") {
alert("Отменено");
} else {
alert("Я вас не знаю");
}

// 
// let login = prompt( 'Who\'s there?', '' );
// if ( login == 'Admin' ) {
//   let password = prompt('Password', '');
//   if ( password == 'I am the boss' ) { alert('Welcome!');}
//   else if ( password == '' || password == null ) {alert('Cancelled');}
//   else { alert('Wrong password');}
// }
// else if ( login == '' || login == null ) { alert('Cancelled'); }
// else { alert('I dont know you');}




//проверка админа
// (login == null || login == "") {
//  alert("Отменено");
// } else {
//  alert("Я вас не знаю");
// }


//11 работающий вариант
//сделать отдельный код для проверки одного условия и отдельный для другого и
  // let login = prompt("Ваш логин", '');
  // if (login == null || login == "") {
  //  alert("Отменено");
  // } if (login == "Админ") {
  //  let password = (prompt("Ваш пароль", ""));
  // }  else {
  //  alert("Я вас не знаю");
  // }

// let password = prompt("Пароль?");
// if (password == null) {
//   alert("Отменено");
// } else if (password == "Я главный") {
//   alert("Здравствуйте");
// } else {
//   alert("Неверный пароль");
// }


// let login = prompt("Ваш логин");
// if (login == null || login == "") {
//   alert("Отменено");
// } else if (login == "Админ"){
//   alert(prompt("Пароль?"));
// } else if (login == null) {
//   alert("Отменено");
// }



//10
// if (0 || "null") alert( 'first' );

//9

// if (age < 14 && age > 90);
//
// let age;
// let x = ( x >= 14 ) && x <=90;
// if (age != x );

// let age = prompt("Введите число не входящее в диапазон от 14 до 90");
// if (age < 14 || age > 90) {
//   alert("Ура");
// } else {
//   alert("Увы");
// }


//8

// let age = prompt("Введите число в диапазоне от 14 до 90, включая пограничные значения");
// if (age >= 14 && age <=90) {
//   alert("Вы молодец");
// } else {
//   alert("Попробуйте снова");
// }


//7
// alert( alert(1) || 2 || alert(3) );

//6

// let x = 1;
//
// (x > 0) && alert( 'Greater than zero!' );

// let language = prompt("What's the официальное название JavaScript?", "");
//
// if (language == 'ECMAScript') {
//   alert("Верно");
// } else  {
//   alert("НЕ знаете?! ECMAScript!");
// }

//3
// let numb = prompt("Введите любое число", "");
//
// if (numb > 0) {
//   alert(1);
// } else if (numb < 0) {
//   alert(-1);
// } else if (numb == 0) {
//   alert(0);
// }


// //4
// let result;
//
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
//let result = условие ? значение1 : значение2; (тернарный оператор?)
//5
// let message;
//
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
//
// let message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина':
// '';

//let result = (a + b < 4) ? 'Мало' : 'Много';




// let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
//
// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }
