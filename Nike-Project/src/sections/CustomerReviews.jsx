import { reviews } from "../constants"
import ReviewsCard from "../components/ReviewsCard"

const CustomerReviews = () => {
  return (
    <section className="max-containerflex flex-col justify-center items-cente">
      <div className="">
      <p className="w-full text-center font-palanquin text-4xl font-bold">What Our <span className="text-coral-red">Customers</span> Say?</p>

      <p className="font-montserrat text-lg max-w-lg sm:w-full mx-auto text-center text-slate-gray pt-4 leading-normal">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>

      <div className="w-full flex flex-1 flex-wrap sm:w-full">
        {reviews.map((ele)=>(
          <ReviewsCard key={ele.customerName}
          imgURL={ele.imgURL}
          customerName={ele.customerName}
          rating={ele.rating}
          feedback={ele.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews