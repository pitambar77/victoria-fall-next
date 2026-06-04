import React from "react";
import { amenityIcons } from "../../../constants/amenityIcons";

const WhyBookWithUs = ({ whybooksection, whybook }) => {
  return (
    <div className="max-w-[1140px] mx-auto py-10 md:py-20 px-4">
      <div
        className="relative bg-cover bg-center rounded-md overflow-hidden"
        style={{
          backgroundImage:
            "url('https://blog.sunsafaris.com/wp-content/uploads/2019/07/FamilyActivitiesTableMountain.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8d7648]/90 to-transparent"></div>

        <div className="relative max-w-[1140px] mx-auto px-4 md:px-10 py-10 lg:py-20">
          <div className="max-w-full md:max-w-xl text-white space-y-6">
            <h2 className="hd text-xl md:text-[30px] mb-5 md:mb-14 font-semibold text-white tracking-[2px] uppercase">
              {whybooksection?.title || "Why Book With Us"}
            </h2>

            <ul className="space-y-4 md:space-y-10 hd">
              {whybook?.map((item, index) => {
                const iconData = amenityIcons.find((i) => i.name === item.icon);

                const Icon = iconData?.icon;

                return (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {Icon && (
                        <Icon className="w-6 md:w-10 h-6 md:h-10 text-white" />
                      )}
                    </div>

                    <div
                      className="text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.description || "",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBookWithUs;
