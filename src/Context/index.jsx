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
  const [filteredItems, setFilteredItems] = useState(null);


  // Get products by Tittle 
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

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
      filteredItems,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}