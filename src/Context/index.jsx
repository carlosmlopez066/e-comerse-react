import { Children, createContext } from "react";

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = (Children) => {
  return (
    <ShoppingCartContext.Provider>
      {Children}
    </ShoppingCartContext.Provider>
  )
}