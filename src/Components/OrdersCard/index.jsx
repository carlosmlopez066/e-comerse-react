import { XMarkIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className=" w-full p-3 flex justify-between items-center border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}
export default OrdersCard