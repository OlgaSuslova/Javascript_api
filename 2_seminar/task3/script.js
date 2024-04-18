// У вас есть кнопка "Купить". Создайте скрипт, который при клике  на эту кнопку меняет её текст на "Товар добавлен в корзину" в  течение 2 секунд, а затем возвращает исходный текст "Купить". 
// В обработчике события клика также проверьте, является ли  событие доверенным (event.isTrusted). Если событие является доверенным, выполните изменение текста кнопки и убедитесь,  что после 2 секунд текст возвращается в исходное состояние.

// const button = document.querySelector('button');
// button.addEventListener('click', (event) => {
//   if (event.isTrusted) {
//     button.textContent = 'Товар добавлен в корзину';
//     setTimeout(() => {
//       button.textContent = 'Купить';
//     }, 2000);
//   }
// });


const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', () => {
	btnEl.textContent = 'Товар добавлен в корзину';
	btnEl.disabled = true;
	setTimeout(() => {
		btnEl.textContent = 'Купить';
		btnEl.disabled = false;
	}, 2000);
});