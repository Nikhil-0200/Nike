import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className="padding-x lg:py-8 max-lg:py-4  fixed z-30 bg-white w-full shadow-3xl ">
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
          src={headerLogo} 
          alt="Logo"
           width={130}
           height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a 
              href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img 
          src={hamburger} 
          alt="Menu Logo"
          width={25}
          height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav