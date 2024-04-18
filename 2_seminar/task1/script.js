// Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы. Меню должно обладать следующими характеристиками:
// 1. Подсветка активного пункта: При клике на пункт меню он должен становиться активным, и для активного пункта должен применяться определенный стиль (например, изменение цвета фона). Если выбрать другой пункт, предыдущий должен перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню должны применяться эффекты (например, изменение цвета текста или фона) для подсказки пользователю, что пункт меню является интерактивным.
const menuEl = document.querySelector('.menu');

menuEl.addEventListener('click', ({ target }) => {
	if (target.closest('.menu__link')) {
		// const menuEls = document.querySelectorAll('.menu__link');
		document.querySelectorAll('.menu__link').forEach((element) => {
			element.classList.remove('active');
		});

		target.classList.add('active');
	}
});
