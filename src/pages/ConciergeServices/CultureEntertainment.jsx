


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";


const CultureEntertainment = () => {
  const items = [
    {
      title: "Boma Dinner & Drum Show",
      description:
        "A lively night of drums, dancers, bold flavours, and joyful chaos. You eat, you listen, you join the rhythm. Somehow, the evening turns into a memory that feels louder, warmer, and far more personal than expected.",
      img: "/Boma-Dinner.webp",
    },
    {
      title: "Heritage & Cultural Tours",
      description:
        "A deeper look into everyday traditions—ceremonies, dances, stories shared with gentle candor. These tours offer more than observation; they create small moments of connection that stay with you long after the journey ends.",
      img: "/Heritage.webp",
    },
    {
      title: "Local Art & Craft Showcases",
      description:
        "Artists gather with beadwork, carvings, paintings, and quiet pride. Watching them demonstrate their craft feels intimate—hands shaping memory into something tangible. You leave appreciating how much culture can be held in one handmade piece.",
      img: "/Local-Art.webp",
    },
    // {
    //   title: "Elephant Hills Cultural Show",
    //   description:
    //     "Traditional rhythms echo across the resort grounds as performers share dances and instruments passed down through generations. It’s an easy, relaxed way to meet Zimbabwean culture without filters—simple, heartfelt, and surprisingly moving.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    // },

    // {
    //   title: "Live Music Performances",
    //   description:
    //     "Guitars, drums, soft vocals—live music spills into warm evenings around town. Some nights feel calm, others turn lively, and every performance carries a little spark of Zimbabwe’s spirit that lingers long after the last note.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    // },
    // {
    //   title: "Heritage & Cultural Tours",
    //   description:
    //     "A deeper look into everyday traditions—ceremonies, dances, stories shared with gentle candor. These tours offer more than observation; they create small moments of connection that stay with you long after the journey ends.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    // },
    //  {
    //   title: "Spirit of Africa Cultural Show",
    //   description:
    //     "At Victoria Falls Hotel, dancers and drummers fill the night with rhythm and story. The show moves gracefully between intensity and softness, giving you a glimpse into a culture carried proudly through generations.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    // },
    //  {
    //   title: "Community Storytelling Evenings",
    //   description:
    //     "A small fire, a quiet circle, and stories passed down through families. Some are funny, some are wise, some are unexpectedly emotional. You listen, feeling time slow down as people share pieces of their lived history.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    // },
    //  {
    //   title: "Local Art & Craft Showcases",
    //   description:
    //     "Artists gather with beadwork, carvings, paintings, and quiet pride. Watching them demonstrate their craft feels intimate—hands shaping memory into something tangible. You leave appreciating how much culture can be held in one handmade piece.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    // },
  ];

  return (
    <section id="culture-entertainment" className="py-10 md:py-20 bg-[#f9f9f7]">
      <div className="max-w-[1140px] mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-10 md:mb-14 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug">
          Culture & Entertainment
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

export default CultureEntertainment;
