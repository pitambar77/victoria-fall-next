


import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";

const RestaurantsMenu = ({ menu }) => {
  // If menu is empty, show message
  if (!menu || menu.length === 0) {
    return <p className="text-gray-500 mt-4">No menu available.</p>;
  }

  // Set default active tab to first category
  const [activeTab, setActiveTab] = useState(menu[0]?.category || "");

  // Filter current category items
  const currentMenu = menu.find((cat) => cat.category === activeTab);

  const textSecondary = "text-gray-500";

  return (
    <section className="hd py-10 md:py-20 bg-[#f9f9f9]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-0 text-center">
        {/* Header Section */}
        <p className="text-sm tracking-widest uppercase mb-4 text-[#5c5e62]">
          TASTE THE BEST THAT SURPRISE YOU
        </p>
        <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px] uppercase mb-6">
          OUR SPECIAL MENU
        </h2>
        <p className="max-w-2xl mx-auto text-justify md:text-center text-[#5c5e62] tracking-[1px] italic mb-10">
          We always give our customers a feeling of peace of mind and comfort when dining at our restaurant.
          Sed ut perspiciatis unde omnis iste natus error voluptate accusantium.
        </p>

        {/* --- Tab Navigation --- */}
        <div className="flex justify-center space-x-4 sm:space-x-8 mb-12 uppercase tracking-widest text-sm">
          {menu.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveTab(cat.category)}
              className={`
                pb-4 cursor-pointer transition duration-300 ease-in-out uppercase
                ${
                  activeTab === cat.category
                    ? "font-bold border-b-2 border-[#aca288] text-[#aca288]"
                    : "hover:text-[#aca288]"
                }
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* --- Menu Items for Active Category --- */}
        <div className=" w-full md:w-2/3 mx-auto">
          {currentMenu?.items.map((item) => (
            <div key={item._id} className="py-4">
              <div className="flex justify-between items-center mb-1">
                {/* Dish Name */}
                <span className=" text-sm md:text-lg uppercase tracking-wider font-[500] text-[#2e2c2d]">
                  {item.name}
                </span>

                {/* Divider */}
                <div className=" hidden md:block flex-1 mx-20">
                  <div className="w-full h-[1px] bg-[#efdc94] mb-1" />
                  <div className="w-full h-[1px] bg-[#efdc94]" />
                </div>

                {/* Price */}
                <span className="text-lg font-[500] text-[#2e2c2d]">
                  ${item.price}
                </span>
              </div>

              {/* Dish Description */}
              <p className={`text-sm ${textSecondary} text-left`}>
                {item.ingredients}
              </p>
            </div>
          ))}
        </div>

        {/* "View All Menu" Button */}
        <div className="md:mt-20 mt-8">
          <Button className="border border-amber-300 py-3 px-8 text-sm tracking-widest uppercase hover:text-[#0b132a] transition duration-300">
            VIEW ALL MENU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsMenu;
