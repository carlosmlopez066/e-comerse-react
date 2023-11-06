import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  //shopping cart counter
  const [count, setCount] = useState(0)

  // toggle productdetail open/close
  const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false)
  const openProductDetail = () => SetIsProductDetailOpen(true)
  const closeProductDetail = () => SetIsProductDetailOpen(false)

  // toggle checkoutSideMenu open/close
  const [ischeckoutSideMenuOpen, SetIscheckoutSideMenuOpen] = useState(false)
  const opencheckoutSideMenu = () => SetIscheckoutSideMenuOpen(true)
  const closecheckoutSideMenu = () => SetIscheckoutSideMenuOpen(false)

  //product Detail - show product
  const [productToShow, setProductToShow] = useState({})

  //shoppingcart - add Product to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  //Get products by API

  const [items, setItems] = useState(null);

  // Get products by Tittle 
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log(searchByTitle)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])
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
      setCartProducts,
      ischeckoutSideMenuOpen,
      opencheckoutSideMenu,
      closecheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}