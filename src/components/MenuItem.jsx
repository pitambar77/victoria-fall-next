// src/components/MenuItem.jsx
import React from 'react';

const MenuItem = ({ title, price, description }) => {
  return (
    <div className="flex justify-between items-center  border-gray-200 py-3">
      {/* Title and Description */}
      <div className="pr-4">
        <h4 className="hd text-lg font-medium text-gray-800 uppercase tracking-wider">{title}</h4>
        <p className="text-sm text-gray-500 font-light leading-relaxed">{description}</p>
      </div>
<div className=''>
 <div className=' w-30 h-[1px]  bg-[#efdc94] mb-1'/>
  <div className=' w-30 h-[1px]  bg-[#efdc94] '/>
</div>
     
      
      
      {/* Price */}
      <div className="flex-shrink-0">
        <span className="hd text-xl font-semibold text-gray-700">${price}</span>
      </div>
    </div>
  );
};

export default MenuItem;