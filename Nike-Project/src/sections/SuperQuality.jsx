import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="SuperQuality" className="xl:w-full flex flex-col gap-10 lg:flex-row justify-between items-center max-container">
      <div className="lg:max-w-lg flex flex-col">
        <p className="lg:max-w-lg   font-palanquin text-4xl font-bold">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</p>

        <p className="font-montserrat text-lg lg:max-w-lg text-slate-gray pt-7 leading-normal">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>

        <p className="font-montserrat text-lg lg:max-w-lg text-slate-gray py-7 leading-normal">Our dedication to detail and excellence ensures your satisfaction</p>

        <div className="mt-5">
        < Button label="View details"/>
        </div>

      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8"
        width={550}
        height={550} 
        />
      </div>
    </section>
  )
}

export default SuperQuality