import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { CurrencyDollarIcon } from "@heroicons/react/24/outline"
import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className=" w-full p-3 flex justify-between items-center border border-black my-2 rounded-lg">
      <p className="flex justify-center  w-80  gap-5">
        <span className="flex">
          <CalendarDaysIcon className="h-6 w-6 text-black" />
          01.02.23
        </span>
        <span className="flex">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          {totalProducts}
        </span>
        <span className="flex font-bold">
          <CurrencyDollarIcon className="h-6 w-6 text-black " />
          {totalPrice}
          <ChevronRightIcon className="h-6 w-6 text-black " />
        </span>
      </p>
    </div>
  )
}
export default OrdersCard