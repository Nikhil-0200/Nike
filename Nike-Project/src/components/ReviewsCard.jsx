import { star } from "../assets/icons"

const ReviewsCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="max-w-lg flex flex-col justify-center items-center mx-auto pt-10 mt-10">
        
        <div className="rounded-full w-fit mx-auto overflow-hidden">
        <img src={imgURL} alt="CustomerImage" 
        height={120}
        width={120}
        />
        </div>

        <p className="font-montserrat text-lg max-w-sm mx-auto text-center pt-8 text-slate-gray md:pt-8 lg:pt-4 leading-normal">{feedback}</p>
       
       <div className="flex gap-3 pt-4 lg:pt-2">
        <img src={star} alt="StarIcon" 
        height={24}
        width={24}
        />
        <p className="text-slate-gray text-xl">({rating})</p>
       </div>
       <h2 className="font-palanquin font-bold text-3xl pt-5">{customerName}</h2>
    </div>
  )
}

export default ReviewsCard