import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex flex-col lg:flex-row justify-between items-center gap-10">
      <h3 className="font-palanquin text-4xl font-bold lg:max-w-md">
      Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="w-full lg:max-w-[40%] flex lg:py-2 flex-col sm:flex-row justify-between border-[1px] border-slate-gray rounded-full py-3 px-5 relative max-sm:mb-20">
      <input
      className="focus:outline-none" 
      type="text" 
      placeholder="subscribe@nike.com"
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full max-sm:absolute bottom-[-160%] left-[0%]">
        <Button fullWidth
        label="Sign Up"/>
      </div>
      </div>
     
    </section>
  )
}

export default Subscribe