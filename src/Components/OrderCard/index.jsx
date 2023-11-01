import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = props => {
  const { id, title, image, price, handleDelete } = props
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black cursor-pointer" />

  }
  return (
    <div className=" w-full p-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-ls object-cover" src={image} alt={title} />
        </figure>
        <p className="text-sm font-light"></p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}
export default OrderCard