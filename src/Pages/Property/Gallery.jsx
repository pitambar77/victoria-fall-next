import React from "react";

// Sample data for the images
const images = [
  {
    id: 1,
    url: "https://images.ctfassets.net/wds1hqrprqxb/1Z74dbDsfucW76lAbWKZXi/569266983a2d45f1948cb33da893c5e3/SG_LODGE_Sabora_Tented_Camp_Ross_Couper_22.jpg?w=1900&h=1266&fl=progressive&q=95&fm=jpg",
  },
  { id: 2, url: "https://wil-assets.spicyweb.net.au/main/NZ%E2%80%94ACCOMMODATION/FJORDLAND-LODGE/Fiordland-Lodge-Winter-Balcony-couple.jpg" },
  { id: 3, url: "https://cdn0.hitched.co.uk/article/7377/3_2/1280/jpg/127737-aardvark-safaris-view-of-romantic-bath-overlooking-a-game-reserve.jpeg" }
  
];

const Gallery = ({ openModal }) => {
  return (
    <div className="bg-[#F8F5F0] py-20 hd ">
      <div className=" max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <h2 className="hd text-center text-[30px]  font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
            Accommodation at  BABOHI Lodge
          </h2>
          <a
            href="#"
            className="flex items-center text-sm md:text-base font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-200 uppercase"
          >
            View Accomodation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main large image */}
          <div className="md:col-span-2 relative">
            <img
              src={images[0].url}
              alt="Main lodge view"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Small images grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 lg:col-span-1">
            <img
              src={images[1].url}
              alt="Bathroom"
              className="w-full h-auto rounded-md shadow-lg"
            />
            {/* <img
              src={images[2].url}
              alt="Patio at sunset"
              className="w-full h-auto rounded-lg shadow-lg"
            /> */}
       

          {/* "View Gallery" card */}
          <div
            className="md:col-span-2 lg:col-span-1 relative cursor-pointer"
            onClick={() => openModal(0)} // Open modal with the first image
          >
            <img
              src={images[2].url}
              alt="Lounge"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center rounded-md">
              <span className="text-white text-lg md:text-xl uppercase font-semibold flex items-center">
                View Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
          </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
