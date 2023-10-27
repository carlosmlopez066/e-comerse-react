/**
 * funtion calculates total price of a new order
 * @param {Array} product cardProduct: Array of Object
 * @returns {Number} total Price
 */
export const totalPrice = (product) => {
  return product.reduce((sum, productSum) => sum + productSum.price, 0)

}