"use client";
import React, { useState, useEffect } from "react";
import { FaClock, FaTv, FaBaby, FaBlender } from "react-icons/fa";
import Button from "../../components/Button";
import ActivityExperienceEnquiryForm from "../../components/ActivityExperienceEnquiryForm";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ZauiBookingModal from "@/components/ZauiBookingModal";

const iconMap = {
  FaTv: <FaTv className="text-[#ab8c51]" />,
  FaBaby: <FaBaby className="text-[#ab8c51]" />,
  FaBlender: <FaBlender className="text-[#ab8c51]" />,
  FaClock: <FaClock className="text-[#ab8c51]" />,
};

const FacilitiesSection = ({ activity }) => {
  const [showAll, setShowAll] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    let retryCount = 0;

    const initZaui = () => {
      if (window?.zauiEmbed) {
        window.zauiEmbed.init();

        // ✅ FORCE re-bind click manually (important)
        const buttons = document.querySelectorAll(".zaui-embed-button");

        buttons.forEach((btn) => {
          btn.onclick = function (e) {
            e.preventDefault();

            if (window.zauiEmbed?.open) {
              window.zauiEmbed.open(this.href);
            } else {
              window.location.href = this.href; // fallback
            }
          };
        });
      } else if (retryCount < 10) {
        retryCount++;
        setTimeout(initZaui, 300);
      }
    };

    if (activity?.bookNowUrl) {
      initZaui();
    }
  }, [activity]);

  if (!activity) return <p>Loading...</p>;

  const visibleFacilities = showAll
    ? activity.facilities || []
    : (activity.facilities || []).slice(0, 6);

  return (
    <div className="bg-[#f9f9f9] py-10 md:py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-[1140px] mx-auto">
        <div className="hd text-[#5c5e62]">
          <h2 className="hd text-xl md:text-[30px]  font-semibold text-[#2e2c2d] tracking-[2px] mb-6 uppercase">
            {activity.activityName}
          </h2>
          <p className="hd text-[#5c5e62]  mb-6">{activity.subDescription}</p>

          <div className="flex items-center  justify-between mb-6">
            <div className="w-[50%]">
              <p className="flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> $
                {activity.pricePerPerson} per person
              </p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#5c5e62] text-left border-l border-[#5c5e62]/50 pl-5 flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> {activity.duration}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-10">
            <div className="w-[50%]">
              <p className="flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> {activity.content}
              </p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#5c5e62] text-left border-l border-[#5c5e62]/50 pl-5 flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Min pax:{" "}
                {activity.minPerson}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Button onClick={() => setShowForm(true)}>Send Enquiry</Button>
            {/* <Button className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition">
              <Link to={'https://pureafricaexperiences.zaui.net/booking/web/#/default/activity/275'}>Book Online</Link>
            </Button> */}
            {/* <Button href={activity.bookNowUrl} target="_blank">
              Book Online
            </Button> */}
            {/* ✅ ADD THIS BUTTON */}
            <Button onClick={() => setShowBooking(true)}>Book Online</Button>
            <ZauiBookingModal
              url={activity.bookNowUrl}
              isOpen={showBooking}
              onClose={() => setShowBooking(false)}
            />

            {/* <a
              className="zaui-embed-button !bg-[#aca188] !text-white !border-0 !rounded-full !text-[14px] !leading-[0] !uppercase !tracking-[3px] !py-[21px] !px-[20px] hover:!bg-[#c40]"
              href={activity.bookNowUrl}
            >
              Book Online
            </a> */}
          </div>
        </div>

        <div>
          <Image
            src={activity.overviewImage}
            alt={activity.activityName}
            width={800}
            height={500}
            className="w-full rounded-md shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Facilities */}
      {activity.facilities && activity.facilities.length > 0 && (
        <div className="mt-12 mb-8 max-w-[1140px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <span className=" hidden md:block w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
              <h2 className="hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide uppercase">
                Services and Facilities
              </h2>
            </div>
            <button
              onClick={() => setShowAll(!showAll)}
              className="hd hidden md:block text-sm uppercase tracking-wide text-[#2e2c2d] hover:underline cursor-pointer"
            >
              {showAll ? "View Less ↑" : "View All →"}
            </button>
          </div>

          <div className="hd grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-[18px] text-[#2e2c2d]">
            {visibleFacilities.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 font-[500]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f9f4e8] hover:bg-gray-100 transition-all duration-300">
                    {/* {iconMap[item.icon] || <FaTv className="text-[#ab8c51]" />} */}
                    <img
                      src="/images/B-B.png"
                      alt="icon"
                      className=" p-1 h-10"
                    />
                  </div>
                  <div>{item.title}</div>
                </div>
                <p className=" hd pl-14 text-[16px] text-[#5c5e62]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* ✅ Mobile button below gallery */}
          <div className="md:hidden mt-10 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="hd hidden md:block text-sm uppercase tracking-wide text-[#2e2c2d] hover:underline cursor-pointer"
            >
              {showAll ? "View Less ↑" : "View All →"}
            </Button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0  z-[9999] flex items-center justify-center bg-black/80 hd p-4 md:p-10">
          <div className="relative w-full md:w-[80%] max-w-[1140px] bg-white  rounded-md animate-slide-down-fade p-4 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute cursor-pointer top-0 md:top-2 right-2  text-[#2e2c2d] hover:text-[#c40]  font-[500] text-[32px]  transform duration-500 w-10 h-10 flex items-center justify-center "
            >
              {/* × */}
              <IoIosClose />
            </button>
            <div className=" text-center mb-2 rounded-t-lg">
              <h3 className="hd text-xl md:text-[24px] font-[500] text-[#2e2c2d] capitalize mt-1">
                {activity.activityName}
              </h3>
              <div className="border-t mt-4  border-[#aca188] w-full mx-auto " />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className=" ">
                <img
                  src={activity.overviewImage}
                  alt={activity.name}
                  className="w-[600px] h-[200px] md:h-[400px] rounded-md shadow-lg object-cover"
                />
                <div className="flex items-center gap-8 mb-6 mt-4">
                  <div className=" flex">
                    <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                      <FaClock className="text-[#aca188] " /> per person :
                    </p>
                    <p className="text-sm font-semibold text-[#5c5e62]">
                      ${activity.pricePerPerson}{" "}
                    </p>
                  </div>
                  <div className=" flex ">
                    <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                      <FaClock className="text-[#aca188]" /> Min pax :
                    </p>
                    <p className="text-sm font-semibold text-[#5c5e62]">
                      {" "}
                      {activity.minPerson}{" "}
                    </p>
                  </div>
                </div>

                <p className="tracking-[1px] text-sm md:text-[18px] text-justify md:text-start mb-0 md:mb-6">
                  {activity.subDescription}
                </p>
              </div>
              <div>
                <ActivityExperienceEnquiryForm
                  activityData={activity.activityName}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesSection;
