import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-screen">
      
      {/* Background Image */}
      <img
        src="https://travelessencemag.com/wp-content/uploads/travelessence-Babohi_Iconic-scaled.webp"
        alt="Couple looking at a sunset over hills by a pool"
        className="absolute inset-0 w-full h-full object-cover"
      />
<div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-32">
        <h1 className="thd leading-[1.6] text-4xl md:text-[60px] tracking-[5px] font-[600] mb-4 uppercase">
          Babohi
        </h1>
        <p className="hd font-[500] text-sm tracking-[5px] max-w-3xl uppercase">
          At Qwabi Private Game Reserve
        </p>
      </div>
    </div>
  )
}

export default Banner