import axios from 'axios';
export const getAllProducts = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response;
};

export async function addNewProduct(data) {
  const response = await axios.post('https://dummyjson.com/products/add', data);
  return response;
}
