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
  // Get products by Category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  //filtered items by title
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  //filtered items by category
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITTLE") {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

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
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}