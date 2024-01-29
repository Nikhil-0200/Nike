const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className=" flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] py-16 px-10 shadow-3xl">
      <div>
        <img src={imgURL} alt="serviceIcon" 
        height={24}
        width={24}
        className="bg-coral-red rounded-full w-[42px] h-[42px] p-2"
        />
      </div>
        <h2 className="font-palanquin font-bold text-3xl pt-5">{label}</h2>
        <p className="font-montserrat text-slate-gray text-lg w-full pt-3 leading-normal">{subtext}</p>
    </div>
  )
}

export default ServicesCard