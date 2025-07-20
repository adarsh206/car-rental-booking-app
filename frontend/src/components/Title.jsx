import React from 'react'

const Title = ({ title, subTitle, align }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center
    ${align === "left" && "md:items-start md:text-left"}`}>
        <h1 className='font-semibold text-4xl md:text-[40px] bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text'>
            {title}
        </h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subTitle}</p>
    </div>
  )
}

export default Title