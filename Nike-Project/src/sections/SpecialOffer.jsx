import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="max-container flex justify-wrap items-center gap-10 flex-col-reverse xl:flex-row">


      <div id="OfferImg" className="">
        <img src={offer} alt="Offer"
        width={773}
        height={550}
        />
      </div>

<div className="xl:max-w-lg sm:w-full flex flex-col ">
        <p className="lg:max-w-lg   font-palanquin text-4xl font-bold"><span className="text-coral-red">Special</span> Offer</p>

        <p className="font-montserrat text-lg xl:max-w-lg text-slate-gray pt-7 leading-normal">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

        <p className="font-montserrat text-lg xl:max-w-lg text-slate-gray py-7 leading-normal">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

        <div className="mt-5 flex flex-wrap gap-5">
        < Button label="Shop now"
        icon={arrowRight}/>
        
        < Button 
        label="Learn more"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"
        />
        </div>

      </div>

    </section>
  )
}

export default SpecialOffer