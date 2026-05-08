const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));

dropdownValues.forEach(value => {
    value.addEventListener('click', function () {

        const dropdown = this.closest('.dropdown');
        const list = dropdown.querySelector('.dropdown__list');

        list.classList.toggle('dropdown__list_active');
    });
});

const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {

        event.preventDefault();

        const dropdown = this.closest('.dropdown');

        dropdown.querySelector('.dropdown__value').textContent =
            this.textContent.trim();

        dropdown.querySelector('.dropdown__list')
            .classList.remove('dropdown__list_active');
    });
});