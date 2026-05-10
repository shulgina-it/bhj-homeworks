const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
  const decButton = product.querySelector('.product__quantity-control_dec');
  const incButton = product.querySelector('.product__quantity-control_inc');
  const quantityValue = product.querySelector('.product__quantity-value');
  const addButton = product.querySelector('.product__add');

  decButton.addEventListener('click', () => {
    let count = Number(quantityValue.textContent);

    if (count > 1) {
      quantityValue.textContent = count - 1;
    }
  });

  incButton.addEventListener('click', () => {
    let count = Number(quantityValue.textContent);

    quantityValue.textContent = count + 1;
  });

  addButton.addEventListener('click', () => {
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').src;
    const productCount = Number(quantityValue.textContent);

    const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

    if (cartProduct) {
      const cartCount = cartProduct.querySelector('.cart__product-count');

      cartCount.textContent =
        Number(cartCount.textContent) + productCount;
    } else {
      const cartProductHTML = `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${productCount}</div>
        </div>
      `;

      cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
    }
  });
});