import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import "./styles.css"


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  console.log('cart', context.cartProducts)
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
      <div className=" w-full p-6 overflow-y-scroll">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />

          ))
        }
      </div>
    </aside>
  )
}
export default CheckoutSideMenu 