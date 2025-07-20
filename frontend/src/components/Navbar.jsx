import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuLinks } from '../assets/assets'

const Navbar = () => {

    const location = useLocation();
    const [open, setOpen] = useState(false);

  return (
    <div>
        <Link to='/'>
            <p className='h-6'>RentCar</p>
        </Link>
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor
        right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50
        ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
            {
                menuLinks.map((link, index) => (
                    <Link key={index} to={link.path}>
                        {link.name}
                    </Link>
                ))
            }
        </div>
        
    </div>
  )
}

export default Navbar