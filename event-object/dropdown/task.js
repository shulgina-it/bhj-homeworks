const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));

dropdownValues.forEach(value => {
    value.addEventListener('click', function () {

        const dropdown = this.closest('.dropdown');
        const list = dropdown.querySelector('.dropdown__list');

        // открытие / закрытие списка
        list.classList.toggle('dropdown__list_active');
    });
});

const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {

        // отменяем переход по ссылке
        event.preventDefault();

        const dropdown = this.closest('.dropdown');

        // меняем текст выбранного элемента
        dropdown.querySelector('.dropdown__value').textContent =
            this.textContent.trim();

        // закрываем список
        dropdown.querySelector('.dropdown__list')
            .classList.remove('dropdown__list_active');
    });
});