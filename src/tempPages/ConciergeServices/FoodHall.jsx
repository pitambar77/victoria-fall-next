import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FoodHall = () => {
  const items = [
    {
      title: "Lookout Café",
      description:
        "Perched on the edge of the gorge, Lookout Café feels like eating inside a postcard. Fresh plates arrive with a breeze, conversations stretch longer than planned, and the view quietly steals your attention every few minutes.",
      img:"/lookoutcafe.webp",
    },
    {
      title: "Three Monkeys",
      description:
        "A lively, easy-going place where wood-fired smells drift around like familiar company. Burgers, pizzas, laughter, and a splash of travel stories—Three Monkeys is where meals turn into small gatherings, even when you arrive alone.",
      img:"/Eatery.webp",
    },
    {
      title: "Smoke House",
      description:
        "Slow-smoked goodness, deep flavours, and a hint of fire in the air. Smoke House is where meat lovers grin without hiding it, and casual diners end up staying longer than they meant to.",
      img: "/smokehouse.webp",
    },
     {
      title: "Boma Dinner & Drum Show",
      description:
        "Dinner here feels like joining a rhythm rather than sitting at a table. Drums pulse through the night, dancers pull you in, and the meal becomes a full-body memory you carry for days.",
      img: "/Boma-Dinner.webp",
    },
     {
      title: "Bushtracks Express – Steam Train Dinner",
      description:
        "A vintage train, soft lights, and the slow hum of wheels on rails. The Bushtracks Express serves dinner as an experience: steady motion, elegant plates, and a nostalgia you feel even if it isn’t yours.",
      img:"/brustcruk.webp",
    },
     {
      title: " The Eatery Restaurant ",
      description:
        "Riverside calm, warm plates, and a gentle sense of occasion. The Eatery keeps things thoughtful but straightforward—every flavour feels deliberate, every moment unhurried. It’s food with a view that quietly resets your mood.",
      img: "/Eatery.webp",
    },
    
  ];

  return (
    <section id="food-hall" className=" py-10 md:py-20  border-gray-100 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 ">
        <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px]  mb-10 text-center uppercase">
          FOOD HALL
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#f9f9f7] rounded-md shadow-sm overflow-hidden group">
              <img src={item.img} alt={item.title} className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="hd text-lg font-[500] text-[#7a6b57] mb-4 text-center">{item.title}</h3>
                <p className="hd text-[#5c5e62]  text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div> */}

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


export default FoodHall