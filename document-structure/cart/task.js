const products = document.querySelectorAll(".product");

const cart = document.querySelector(".cart__products");

products.forEach((product) => {
  const decBtn = product.querySelector(".product__quantity-control_dec");
  const incBtn = product.querySelector(".product__quantity-control_inc");
  const valueElem = product.querySelector(".product__quantity-value");
  const addBtn = product.querySelector(".product__add");

  decBtn.addEventListener("click", () => {
    let currentValue = parseInt(valueElem.textContent);
    if (currentValue > 1) {
      valueElem.textContent = currentValue - 1;
    }
  });

  incBtn.addEventListener("click", () => {
    let currentValue = parseInt(valueElem.textContent);
    valueElem.textContent = currentValue + 1;
  });

  addBtn.addEventListener("click", () => {
    const productId = product.dataset.id;
    const productImgSrc = product.querySelector(".product__image").src;
    const quantity = parseInt(valueElem.textContent);

    let cartProduct = cart.querySelector(
      `.cart__product[data-id="${productId}"]`
    );

    if (cartProduct) {
      const cartCount = cartProduct.querySelector(".cart__product-count");
      cartCount.textContent = parseInt(cartCount.textContent) + quantity;
    } else {
      const newCartProduct = document.createElement("div");
      newCartProduct.classList.add("cart__product");
      newCartProduct.dataset.id = productId;

      const img = document.createElement("img");
      img.classList.add("cart__product-image");
      img.src = productImgSrc;

      const count = document.createElement("div");
      count.classList.add("cart__product-count");
      count.textContent = quantity;

      newCartProduct.appendChild(img);
      newCartProduct.appendChild(count);
      cart.appendChild(newCartProduct);
    }
  });
});
