import { PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  //showproduct
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductToCart = (productData) => {
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    console.log("cart:", context.cartProducts)
  }
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >

      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
        <img className="w-full h-full object-cover rounded-lg " src={data.data.image} alt={data.data.title} />
        <div className="absolute top-0 right-0 flex row-auto justify-center items-center  bg-white w-6 h-6 rounded-full m-2 p1"
          onClick={() => addProductToCart(data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black p-1" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}
export default Card