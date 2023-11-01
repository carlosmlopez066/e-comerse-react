import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"

function MyOrder
  () {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout >
      MyOrder
      <div className=" w-2/6 p-6 ">
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />

          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder

