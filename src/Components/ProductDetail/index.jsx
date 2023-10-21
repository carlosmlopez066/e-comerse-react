import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import "./styles.css"


const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  console.log("ProductTOSHOW:", context.productToShow)
  return (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail   items-center flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className=" w-full flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <div>
          <XMarkIcon onClick={() => context.closeProductDetail()} className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <figure>
        <img
          className="w-auto h-44 rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.tittle}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  )
}
export default ProductDetail 