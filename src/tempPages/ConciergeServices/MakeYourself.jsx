import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";



const MakeYourself = () => {
  const items = [
    {
      title: "Pre-stock Your Villa",
      description:
        "Arriving tired is normal, and an empty fridge never feels welcoming. Tell us what comforts you crave. We quietly fill your pantry before you walk in, so your stay starts soft and easy.",
      img: "/Pre-stock-villa.webp",
    },
    {
      title: "Airport Transfer or Chauffeur",
      description:
        "Step out of the arrivals hall and breathe. Your driver is already waiting. No searching, no negotiating, no stress. Just a calm ride from the airport to the doorstep, giving your holiday an unhurried beginning.",
      img: "/airporttransport.webp",
    },
    {
      title: "Hire a Chef",
      description:
        "Some days you want flavours without the fuss. Our private chef listens, cooks, and brings meals that feel personal. No rush, no noise, just simple dishes made with care in your own space.",
      img: "/hire-chef.webp",
    },
    {
      title: "Wine O’Clock",
      description:
        "A long day deserves something gentle. Browse our curated selection and we’ll bring the bottle to you. Thoughtful sommeliers handpick every option, turning a quiet evening into a small, comforting celebration.",
      img:"/wine.webp",
    },
    {
      title: "Shopping Assistant",
      description:
        "If errands drain your holiday spirit, hand them to someone who enjoys the hunt. Our shopping assistant finds what you need with calm precision, leaving you free to enjoy the fun parts.",
      img:"/market.webp",
    },
    {
      title: "In-house Spa Treatments",
      description:
        "Sometimes your body whispers for softness. Our therapists bring calm right to your room, easing stiffness, slowing your thoughts, and creating a pocket of stillness where everything—finally—feels unhurried again.",
      img: "massage.webp"
    },
  ];

  return (
    <section id="make-at-home" className="py-10 md:py-20 ">
      <div className="max-w-[1140px] mx-auto px-4 ">
        <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px]  mb-10 text-center uppercase">
          Make Yourself at Home 
        </h2>

         {/* --- Mobile/Tablet Swiper --- */}
        <div className="block lg:hidden relative group">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="pb-10"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#f9f9f7] hd rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[240px] sm:h-[260px] object-cover"
                  />
                  <div className="p-5 text-[#2e2c2d]">
                    <h3 className="text-lg sm:text-xl font-[500] text-[#7a6b57] mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#5c5e62] text-sm text-justify ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
            <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
          </button>

          <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
            <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
          </button>
        </div>
      

  {/* --- Desktop Grid --- */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9f7] rounded-md shadow-sm overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="hd text-lg font-[500] text-[#7a6b57] mb-4 text-center">
                  {item.title}
                </h3>
                <p className="hd text-[#5c5e62] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



export default MakeYourself