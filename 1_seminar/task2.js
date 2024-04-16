// Задание 2
// Даны html и css:
// <style>
//   .box {
//     width: 100px;
//     height: 100px;
//     background-color: lightblue;
//     margin: 10px;
//     display: inline-block;
//   }
// </style>
 
// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//   <div class="box">1</div>
//   <div class="box">2</div>
//   <div class="box">3</div>
// </div>
 
// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу 
// добавляется новый квадратный элемент (<div>) с размерами 
// 100x100 пикселей. Этот элемент должен иметь класс .box 
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).
// - При нажатии на кнопку "Удалить элемент" удаляется 
// последний добавленный элемент, если таковой имеется.
// - При нажатии на кнопку "Клонировать элемент" создается 
// копия последнего добавленного элемента и добавляется на 
// страницу. Если последнего добавленного элемента нет на 
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.

const addButtonEl = document.querySelector('#addButton');
const removeButtonEl = document.querySelector('#removeButton');
const cloneButtonEl = document.querySelector('#cloneButton');
const containerEl = document.querySelector('#container');

addButtonEl.addEventListener('click', (e) => {
    const boxAmount = containerEl.querySelectorAll('.box').length;
    containerEl.insertAdjacentHTML('beforeend', `<div class="box">${boxAmount + 1}</div>`)
});


removeButtonEl.addEventListener('click', function (e) {
    containerEl.lastElementChild?.remove();

    // const boxAmount = containerEl.querySelectorAll('.box').length;
    // if (boxAmount > 0) {
    //     containerEl.lastElementChild.remove();
    // } else {
    //     alert('No elements to remove');
    // }
});

cloneButtonEl.addEventListener('click', function (e) {
    const newBox = containerEl.lastElementChild?.cloneNode(true);
    if (newBox) {
        containerEl.insertAdjacentElement('beforeend', newBox)
    } else {
        alert('No elements to clone');
    }

    // const boxAmount = containerEl.querySelectorAll('.box').length;
    // if (boxAmount > 0) {
    //     const clonedEl = containerEl.lastElementChild.cloneNode(true);
    //     containerEl.insertAdjacentHTML('beforeend', clonedEl);
    // } else {
    //     alert('No elements to clone');
    // }
});