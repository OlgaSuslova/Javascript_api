// Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно должно содержать заголовок "Модальное окно" и кнопку для закрытия. Модальное окно должно плавно появляться и исчезать при открытии и закрытии.

const btnEl = document.querySelector('.btn');
const modalEl = document.querySelector('.modal');
const closeEl = document.querySelector('.close');

btnEl.addEventListener('click', () => {
	modalEl.classList.add('active');
});

closeEl.addEventListener('click', () => {
	modalEl.classList.remove('active');
});