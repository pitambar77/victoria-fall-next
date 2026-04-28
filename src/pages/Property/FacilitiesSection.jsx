import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import {
  FaClock,
  FaMapMarkerAlt,
  FaWifi,
  FaTv,
  FaBaby,
  FaDog,
  FaBlender,
} from "react-icons/fa";
import Button from "../../components/Button";
import PropertiesBookingForm from "../../components/PropertiesBookingForm";
import { IoIosClose } from "react-icons/io";
import SpaceDetails from "./SpaceDetails";

const spaceData = [
  {
    icon: "../accomodation.png",
    name: "Accommodates",
    count: "14",
  },
  {
    icon: "../accomodation.png",
    name: "Bathrooms",
    count: "4",
  },
  {
    icon: "../accomodation.png",
    name: "Private Pool",
    count: "8",
  },
  {
    icon: "../accomodation.png",
    name: "Air Conditioning",
    count: "7",
  },
  {
    icon: "../accomodation.png",
    name: "Kitchen",
    count: "1",
  },
  {
    icon: "../accomodation.png",
    name: "Free Wifi",
    count: "9",
  },
  {
    icon: "../accomodation.png",
    name: "Pet Friendly",
    count: "yes",
  },
  {
    icon: "../accomodation.png",
    name: "Parking",
    count: "7",
  },
];

const bedData = [
  {
    icon: "../accomodation.png",
    level: "Bedroom 1",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Bedroom 2",
    name: "1 queensize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Bedroom 3",
    name: "1 single bed",
  },
  {
    icon: "../accomodation.png",
    level: "First floor Bedroom",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Ground floor Bedroom 1",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Ground floor Bedroom 2",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Ground floor Bedroom 1",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Ground floor Bedroom 2",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Ground floor Bedroom 1",
    name: "1 kingsize bed",
  },
  {
    icon: "../accomodation.png",
    level: "Ground floor Bedroom 2",
    name: "1 kingsize bed",
  },
];

const FacilitiesSection = () => {
  //backend start

  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://victoria-fall-backend.manoramaseoservice.com/api/properties/slug/${slug}`,
      )
      .then((res) => setRestaurant(res.data))
      .catch(console.error);
  }, [slug]);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  const facilities = restaurant.facilities;

  // Limit to first 6 if not expanded
  const visibleFacilities = showAll ? facilities : facilities.slice(0, 6);

  const visibleSpaces = showAll ? spaceData : spaceData.slice(0, 6);
  const visibleBed = showAll ? bedData : bedData;

  return (
    <div className="  bg-[#f9f9f9] py-10 md:py-20  ">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-[1140px] mx-auto px-4">
        {/* Left Content */}
        <div className=" hd text-[#5c5e62] ">
          <h3 className="hd text-xl md:text-[30px]  font-semibold text-[#2e2c2d] tracking-[2px] mb-6 uppercase">
            {restaurant.name}
          </h3>
          <p className="  tracking-[1px] text-[18px]  mb-6">
            {restaurant.subDescription}
          </p>

          {/* Check-in / Check-out */}
          <div className="flex items-center justify-between mb-6">
            <div className=" flex">
              <p className=" capitalize font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188] " /> Accommodates
              </p>
              <p className=" font-semibold text-[#5c5e62]">
                {/* {restaurant.checkIn} */} : 14
              </p>
            </div>
            <div className=" flex">
              <p className=" font-[500] text-[#5c5e62] flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Bedrooms
              </p>
              <p className=" font-semibold text-[#5c5e62]">
                : {/* {restaurant.checkOut} */} 7
              </p>
            </div>
            <div className=" flex">
              <p className=" font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188] " /> Bathrooms
              </p>
              <p className=" font-semibold text-[#5c5e62]">
                : {/* {restaurant.checkIn} */} 7
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className=" flex">
              <p className=" font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188] " /> Property Type
              </p>
              <p className=" font-semibold text-[#5c5e62]">
                : {/* {restaurant.checkIn} */} House
              </p>
            </div>
            <div className=" flex">
              <p className=" font-[500] text-[#5c5e62] flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Check out
              </p>
              <p className=" font-semibold text-[#5c5e62]">
                : {restaurant.checkOut}
              </p>
            </div>
            <div className=" flex">
              <p className=" font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188] " /> Check in
              </p>
              <p className=" font-semibold text-[#5c5e62]">
                : {restaurant.checkIn}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 text-[#5c5e62]">
            <p className="text-sm  uppercase font-[500] flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-[#aca188]" /> Address
            </p>
            <p className=" hd capitalize tracking-[1px]">
              {restaurant.address1} <br />
              {restaurant.address2}
            </p>
          </div>

          {/* CTA & Price */}
          <div className="flex items-center gap-6">
            <Button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition"
            >
              BOOK NOW
            </Button>
            <p className=" hd text-[#5c5e62] text-md ">
              From{" "}
              <span className="text-[#f25922] font-semibold">
                {restaurant.priceperPerson}
              </span>
              /P.P.
            </p>
          </div>
        </div>

        {/* Right Image */}
        {/* <div>
          <img
            src={restaurant.overviewImage}
            alt={restaurant.name}
            className="w-full rounded-md shadow-lg object-cover"
          />
        </div> */}
        <div className=" mt-16 hd text-[#5c5e62] ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 md:gap-6 hd text-[18px] text-[#2e2c2d]">
            {visibleBed.map((item, index) => (
              <div key={index} className=" gap-3">
                <div className=" font-[500] text-[#5c5e62] ">
                  <p className="">{item.level} : </p>
                </div>
                <div className="flex items-center gap-3 ">
                  <img src={item.icon} alt="" className="h-4 w-4" />
                  <div className=" font-[400] text-[#5c5e62] ">
                    <p> {item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t mt-12 mb-8"></div> */}

      {/* Services and Facilities */}
      <div className="mt-12 mb-2 md:mb-8 max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex items-center  ">
            <span className=" hidden md:block w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
            <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase">
              Services and Facilities
            </h2>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
            >
              {showAll ? "View Less ↑" : "View All →"}
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4  md:gap-6 hd text-[18px] text-[#2e2c2d] ">
          {visibleFacilities.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ${
                item.disabled ? "opacity-50 line-through" : ""
              }`}
            >
              <div className="flex items-center gap-3 font-[500]">
                <div className=" flex items-center justify-center w-12 h-12 rounded-full  bg-[#f9f4e8]   transition-all duration-300 hover:bg-gray-100">
                  <img src={item.icon} alt="" className="h-8 w-8" />
                </div>
                <div>{item.facilityName}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile button below gallery */}
        <div className="md:hidden mt-10 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
          >
            {showAll ? "View Less ↑" : "View All →"}
          </Button>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0  z-[9999] flex items-center justify-center bg-black/80 hd p-6 md:p-10">
          <div className="relative w-full md:w-[80%] max-w-[1140px] mx-auto bg-white  rounded-md animate-slide-down-fade p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute cursor-pointer top-0  md:top-2 right-0 md:right-2  text-[#2e2c2d] hover:text-[#c40]  font-[500] text-[32px]  transform duration-500 w-10 h-10 flex items-center justify-center "
            >
              {/* × */}
              <IoIosClose />
            </button>
            <div className=" text-center mb-4 rounded-t-lg">
              <h3 className="hd text-xl md:text-[24px] font-[500] text-[#2e2c2d] capitalize mt-1">
                {restaurant.name}
              </h3>
              <div className="border-t mt-4  border-[#aca188] w-full mx-auto " />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
              <div className=" ">
                <img
                  src={restaurant.bannerImage}
                  alt={restaurant.name}
                  className="w-[600px] h-[200px] md:h-[400px] rounded-md shadow-lg object-cover"
                />
                <div className="flex items-center gap-8 mb-6 mt-4">
                  <div className=" flex">
                    <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                      <FaClock className="text-[#aca188] " /> Check in :
                    </p>
                    <p className="text-sm font-semibold text-[#5c5e62]">
                      {restaurant.checkIn}{" "}
                    </p>
                  </div>
                  <div className=" flex ">
                    <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                      <FaClock className="text-[#aca188]" /> Check out :
                    </p>
                    <p className="text-sm font-semibold text-[#5c5e62]">
                      {restaurant.checkOut}{" "}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className=" mb-0 md:mb-6 text-[#5c5e62]">
                  <p className="text-sm  uppercase font-[500] flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt className="text-[#aca188]" /> Address
                  </p>
                  <p className=" hd capitalize tracking-[1px]">
                    {restaurant.address1} <br />
                    {restaurant.address2}
                  </p>
                </div>
              </div>
              <div>
                <PropertiesBookingForm propertyName={restaurant.name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesSection;
