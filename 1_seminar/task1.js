// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину и высоту окна браузера, при изменении значений, вывод
// также должен меняться.

// console.log(window.innerWidth + " " + window.innerHeight);//ширина , высота окна 

// console.log(document.documentElement.clientWidth + " " + document.documentElement.clientHeight); //ширина высота за исключение прокуртки(размер видимой области) , documentelement - тэг html, рутовый тэг

// console.log(screen.availWidth + " " + screen.availHeight); //область которую браузер может занять


// const sizeEl = document.querySelector('.size');
// window.addEventListener('resize', (e) => {
//     printSize();
// });

// function printSize() {
//     sizeEl.textContent = `${window.innerWidth} x ${window.innerHeight}`;
// }


// 2. При закрытии страницы (вкладки), необходимо выводить всплывающее окно или диалоговое окно браузера и спросить, уверен ли пользователь, что хочет покинуть страницу?

// window.addEventListener('beforeunload', function (e) {
//     if (!confirm('Вы уверены, что хотите закрыть?')) {
//         e.preventDefault();
//     } else {
//         console.log();
//     }
// });

// window.addEventListener('beforeunload', function(event) {
//     event.preventDefault();
//     event.returnValue = '';
//     return 'Вы уверены, что хотите покинуть эту страницу?';
// });

// 3. Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

window.history.back();
window.history.forward();

