import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout >
      <h1 className="font-medium text-xl">Exclusive Products</h1>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 h-10 p-4 mb-4 mt-2 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen=lg">
        {
          context.items?.map((item) => (
            <Card key={item.id} data={item} />
          )
          )
        }
      </div>
      <ProductDetail />
    </Layout>

  )
}

export default Home
