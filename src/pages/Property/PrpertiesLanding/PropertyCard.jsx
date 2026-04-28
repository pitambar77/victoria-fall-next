import React from "react";
import Link from "next/link";


const PropertyCard = ({ property }) => {
  return (
    <>
      <Link href={`/property/${property.slug}`}>
        <div className=" hd flex gap-4 border border-gray-300 rounded-xl  mb-4 bg-white shadow-sm">
          {/* Image */}
          <img
            src={property.images[0]}
            className="w-[260px] h-[180px] object-cover rounded-l-xl"
          />

          {/* Info */}
          <div className="flex-1 flex flex-col justify-between p-4">
            <div>
              <p className="hd  text-[#2e2c2d]">
                {property.distance} 
              </p>

              <h2 className="hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide capitalize">
                {property.title}
              </h2>

              <p className="text-[#2e2c2d]  capitalize">
                {property.category} · {property.bedrooms} bedrooms
                · {property.bathrooms} bathrooms
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                <span className="bg-[#aca188] text-white px-2 py-1 rounded ">
                  {property.rating}
                </span>
                <span className="">Exceptional</span>
                <span className="text-[#2e2c2d] ">
                  {property.reviews} reviews
                </span>
              </div>

              <div className=" hd text-right">
                <p className="text-[#2e2c2d] font-semibold">
                  $ {property.price}
                </p>
                <p className="text-[#2e2c2d] ">avg per night</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;
