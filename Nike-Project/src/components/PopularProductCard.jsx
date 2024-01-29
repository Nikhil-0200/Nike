import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, Star, name, price}) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full">
        <img 
        src={imgURL}
        className="w-[280px] h-[280px]"
        />
        <div className="flex items-center space-x-4 pt-8 pb-4">
          <img src={star} 
          alt="StarLogo"
          width={24}
          height={24} 
          />
          <p className="text-xl text-green-600 font-montserrat">({Star})</p>
        </div>
        <h3 className="font-palanquin text-2xl font-bold">{name}</h3>
        <h2 className="font-montserrat text-2xl text-coral-red font-semibold pt-3">{price}</h2>

    </div>
  )
}

export default PopularProductCard