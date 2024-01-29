import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container">
      <div className="flex flex-col justify-cenyer gap-5">
        <h2 className="font-palanquin text-4xl xl:text-[55px] font-bold">Our  
          <span className="text-coral-red"> Popular </span> 
          Products
        </h2>

        <p className="font-montserrat text-slate-gray lg:w-2/4 pt-3">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="mt-16 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      sm:gap-6 gap-14">
        {products.map((ele)=>(
          <PopularProductCard key={ele.name}  
          imgURL={ele.imgURL}
          Star={ele.star}
          name = {ele.name}
          price = {ele.price}
          />
           
        ))}
      </div>
    </section>
  )
}

export default PopularProducts