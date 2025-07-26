import React from 'react'
import { dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom';

const NavbarOwner = () => {

    const user = dummyUserData;

  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor
    relative transition-all'>
         <Link to='/'>
            <h1 className='text-2xl bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text font-bold'>RentCar</h1>
        </Link>
        <p>Welcome, {user.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner