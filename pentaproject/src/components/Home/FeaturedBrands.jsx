
import Products from "./Products"
const FeaturedBrands = () => {
  return (
    <section className="bg-white py-16 text-center shadow-md my-7 w-full px-10">
      <h1 className=" font-semibold text-2xl mb-4 text-blue-400">Our featured products</h1>
      <p className="font-medium">Take a look at our trending product.  Browse through and see what people are buying</p>
      
      <div>
        <Products />
      </div>
    </section>
  )
}

export default FeaturedBrands