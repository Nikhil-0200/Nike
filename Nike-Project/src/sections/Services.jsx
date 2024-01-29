import { services } from "../constants"
import ServicesCard from "../components/ServicesCard"

const Services = () => {
  return (
    <section className="max-container flex justify-between flex-wrap gap-9">
        {services.map((ele)=>(
            <ServicesCard key={ele.label}
            {...ele}
            />
        ))}
    </section>
  )
}

export default Services