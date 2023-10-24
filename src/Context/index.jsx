import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  //shopping cart counter
  const [count, setCount] = useState(0)

  // toggle productdetail
  const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false)
  const openProductDetail = () => SetIsProductDetailOpen(true)
  const closeProductDetail = () => SetIsProductDetailOpen(false)

  //product Detail - show product
  const [productToShow, setProductToShow] = useState({})

  //shoppingcart - add Product to cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}