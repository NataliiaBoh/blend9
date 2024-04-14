import { addNewProduct } from '../requests/products';

import { createProductMarkup } from '../services/markupService';
import { refs } from './refs';
export async function onCreateProductFormSubmit(event) {
  event.preventDefault();

  try {
    const newProduct = {};
    new FormData(event.currentTarget).forEach((value, key) => {
      newProduct[key] = value;
    });
    const response = await addNewProduct(newProduct);
    const markup = createProductMarkup(response.data);
    refs.newProductSection.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error.message);
  }
}
