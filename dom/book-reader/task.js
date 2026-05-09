const book = document.getElementById('book');

const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const textColors = Array.from(document.querySelectorAll('[data-text-color]'));
const bgColors = Array.from(document.querySelectorAll('[data-bg-color]'));

fontSizes.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    document
      .querySelector('.font-size_active')
      .classList.remove('font-size_active');

    button.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = button.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    }

    if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});

textColors.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    document
      .querySelector('.book__control_color .color_active')
      .classList.remove('color_active');

    button.classList.add('color_active');

    book.classList.remove(
      'book_color-black',
      'book_color-gray',
      'book_color-whitesmoke'
    );

    book.classList.add(`book_color-${button.dataset.textColor}`);
  });
});

bgColors.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    document
      .querySelector('.book__control_background .color_active')
      .classList.remove('color_active');

    button.classList.add('color_active');

    book.classList.remove(
      'book_bg-black',
      'book_bg-gray',
      'book_bg-white'
    );

    book.classList.add(`book_bg-${button.dataset.bgColor}`);
  });
});