//На странице есть список элементов, каждый из которых имеет атрибут data-price, содержащий цену товара. Создайте функцию, которая принимает максимальную цену и скрывает все элементы с ценой выше указанного значения.
const filterElementsByDataAttribute = (attributeName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
    console.log(elements);
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

filterElementsByDataAttribute('data-price', 50);

//На странице есть список элементов, каждый из которых имеет атрибут data-rating, содержащий рейтинг товара. Создайте функцию, которая сортирует элементы в порядке убывания рейцтинга и переставляет их на странице в соответствии с новым порядком
const sortElementsByDataAttribute = (attributeName) => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    elements.sort((a, b) => {
        const ratingA = parseFloat(a.getAttribute(attributeName));
        const ratingB = parseFloat(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elements.forEach(element => {
        rating.appendChild(element);
    });
};

//Пример использования
sortElementsByDataAttribute('data-rating');