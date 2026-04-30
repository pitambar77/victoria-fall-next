import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import wellness from '../../assets/wellness.webp'


const BeautyWellbeing = () => {
  const items = [
    {
      title: "Spa and Wellness Centers",
      description:
        "Soft music, warm oils, and treatments shaped with local ingredients. Spas here feel like small sanctuaries—places where tired muscles loosen, minds settle, and you remember what it feels like to be gently cared for again.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Yes-we-care.jpg",
    },
    {
      title: "Yoga and Meditation",
      description:
        "Mats lie out beneath open skies, slow breathing, a view stretching into the wild. Yoga in Victoria Falls feels grounding—steady movements, calm voices, and a sense that your body finally has space to listen.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2017/08/t1-897x1024.jpg",
    },
    {
      title: "Health Clubs and Gyms",
      description:
        "Modern equipment, bright spaces, and trainers who understand travel fatigue. Workouts here feel flexible—no pressure, just movement that helps you reset. Sometimes a familiar routine is all it takes to feel fully yourself again.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/pexels-cottonbro-3998013.jpg",
    },
    {
      title: "Holistic Treatments",
      description:
        "Reflexology, aromatherapy, energy balancing—gentle therapies that reach deeper than expected. These sessions feel subtle, almost invisible in the beginning, then suddenly everything inside you sits a little straighter, a little clearer, a little lighter.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2019/01/yoga_2.jpg",
    },
    // {
    //   title: "Health Food & Wellness Retreats",
    //   description:
    //     "Fresh meals, quiet mornings, and days built around nourishment rather than urgency. Wellness retreats offer a simple rhythm—eat well, move gently, rest fully. You leave feeling intentionally rebuilt, not just temporarily refreshed.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/10/let-your-hair-down.jpg",
    // },
    // {
    //   title: "Medical Services",
    //   description:
    //     "Clinics and pharmacies stand ready when you need reassurance. Consultations are calm, efficient, and surprisingly comforting. It’s good to know that care is close by, even during a trip meant for escape and ease.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/10/living-in-the-moment.jpg",
    // },
      {
      title: "Outdoor Relaxation Areas",
      description:
        "Shaded loungers, soft breezes, and the quiet hum of nature around you. These open-air corners feel like gentle pauses—places where you sit without an agenda and somehow feel your whole system calming down.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/10/living-in-the-moment.jpg",
    },
    //   {
    //   title: "Private In-Room Treatments",
    //   description:
    //     "Sometimes you want care without moving an inch. Therapists arrive softly, creating a spa atmosphere inside your room. Warm towels, soothing oils, unhurried hands—comfort delivered right where you already feel most at ease.",
    //   img: "https://theluberonconcierge.com/wp-content/uploads/2022/10/living-in-the-moment.jpg",
    // },
      {
      title: "Wellness Consultations",
      description:
        "For deeper balance, some practitioners offer gentle guidance on diet, stress, and overall well-being. Nothing strict, nothing overwhelming—just thoughtful conversations that help you tune into what your body quietly asks for.",
      img:"/wellness.webp",
    },
  ];

  return (
    <section id="beauty-wellbeing" className="py-10 md:py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 ">
        <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px]  mb-10 text-center uppercase">
          Beauty and Wellness
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

export default BeautyWellbeing;
