import React from 'react'

const Overview = () => {
  return (
    <div className="bg-white py-10 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="hd max-w-xl mx-auto text-xl md:text-[30px] mb-6 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
         Welcome To  <br className="hidden md:inline" />  Where To Africa
         
        </h2>

        {/* Description */}
        <p className="hd max-w-2xl mx-auto md:text-center text-justify text-[#5c5e62] tracking-[1px]">
          Apply here for your bed aand breakfast property to join our exclusive range of Victoria Falls Bed & Breakfasts.
        </p>
      </div>
    </div>
  )
}

export default Overview