import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container flex flex-col justify-start gap-10 w-full ">

      <div className="flex flex-col gap-20 justify-between lg:flex-row">
      <div className="flex flex-col gap-5 text-white-400 max-w-sm">
        <img src={footerLogo} 
        alt="Footer Logo" 
        width={140}
        height={130}
        />
        <p className="w-full sm:max-w-xs text-lg leading-normal pt-1 font-montserrat">
        Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
        </p>
        <div className="flex justify-between gap-5 w-max pt-3">
          {socialMedia.map((ele)=>(
            <div key={ele.src} className="bg-white rounded-full p-3">
              <img src={ele.src} 
              alt={ele.alt} 
              width={24}
              height={24}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap flex-1 gap-8 justify-between lg:justify-evenly max-lg:max-w-xl w-xl ">
        {footerLinks.map((ele)=>(
          <div key={ele.title} className="w-30">
            <p className="text-white text-2xl font-montserrat font-medium py-4 min-w-32 ">
              {ele.title}
            </p>

            {ele.links.map((FooterName)=>(
              <ul key={FooterName.name}>
                <li  className="text-white-400 text-md font-montserrat leading-9">
                {FooterName.name}
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
      </div>

      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        <img src={copyrightSign} alt="copy right sign" 
        width={20}
        height={20}
        className="rounded-full m-0"
        />
        <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer


// <div className="border-2 border-blue-500 text-white text-3xl font-montserrat font-medium py-4">
//           <p>Products</p>
//         </div>