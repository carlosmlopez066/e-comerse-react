import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"


const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)
  //console.log('cart', context.cartProducts.map(priceProduct => priceProduct.price))

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside
      className={`${context.ischeckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu   items-center flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className=" w-full flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon onClick={() => context.closecheckoutSideMenu()} className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div className=" w-full p-6 overflow-y-scroll flex-1">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              handleDelete={handleDelete}
            />

          ))
        }
      </div>
      <div className=" w-full p-6">
        <p className="flex items-center justify-between  text-lg font-sm  ">
          <span >Total price</span>
          <span className="text-lg font-medium ">${totalPrice(context.cartProducts)}</span>
        </p>
        <button className="bg-black text-white rounded-lg mt-3 py-3 text w-full" onClick={() => handleCheckout()}>
          Checkout
        </button>
      </div>
    </aside>
  )
}
export default CheckoutSideMenu 