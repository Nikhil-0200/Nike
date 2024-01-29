import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import { statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import { shoes } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)


  return (
    <section 
    id="home"
    className="w-full flex 
    xl:flex-row flex-col justify-center min-h-screen gap-10
    max-container"
    >

<div className="relative xl:w-[48%]  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

  <p className=" font-montserrat text-xl text-coral-red">Our Summer Collection</p>

  <h1 className="text-8xl  xl:whitespace-nowrap z-10 pr-10 font-palanquin leading-none mt-10 max-sm:text-[72px] max-sm:leading-[80px] font-bold"><span className="xl:bg-white xl:rounded-3xl pr-5">The New Arrival</span>
 
  <br /> 
  
  <span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>

  <p className="font-montserrat text-slate-gray py-10 leading-8 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>

  <Button label="Shop Now"
  icon={arrowRight}
  />

  <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
    {statistics.map((ele)=>(
      <div key={ele.value}>
        <p className="font-palanquin text-4xl font-bold">{ele.value}</p>

        <p className="text-slate-gray text-lg leading-7">{ele.label}</p>
      </div>
    ))}
  </div>
</div>

<div className="flex flex-1 
justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center relative
">
  <img
  src={bigShoeImg} alt="shoes1"
  width={600}
  height={600}
  className="object-contain z-10 pb-10"
  />

  <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%]">
    {shoes.map((image, index)=>(  
      <div key={index}>
        <ShoeCard
        index={index}
        imgURL = {image}
        ChangeBigShoeImage=
        {(shoe) => setBigShoeImg(shoe)}
        bigShoeImg = {bigShoeImg}
        />
      </div>
    ))}
  </div>
</div>
    </section>
  )
}

export default Hero