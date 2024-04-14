import './styles/normalize.css';
import './styles/index.css';

import { refs } from './js/refs';
import { getAllProducts } from './requests/products';
import { onCreateProductFormSubmit } from './js/onCreatePruductFormSubmit';

// renderProducts();
refs.createProductForm.addEventListener('submit', onCreateProductFormSubmit);

async function renderProducts() {
  try {
    const allProducts = await getAllProducts();

    const marcup = allProducts.data.products
      .map(
        ({ title, description, price }) =>
          `<li><h3>${title}</h3><p>${description}</p><p>${price}</p></li>`
      )
      .join(``);
    refs.listProducts.insertAdjacentHTML('beforeend', marcup);
  } catch (error) {
    console.log(error.message);
  }
}
