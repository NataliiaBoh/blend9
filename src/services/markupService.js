export function createProductMarkup({ title, description, price }) {
  return `<h3>${title}</h3><p>${description}</p><p>${price}</p>`;
}
