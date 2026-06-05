import React from "react";
import { amenityIcons } from "../../constants/amenityIcons";

const Services = ({ title, items = [] }) => {
  return (
    <div className="bg-[#f9f9f7] py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4">
        {title && (
          <h2 className="hd text-xl md:text-[30px] text-center mb-12 uppercase tracking-[3px]">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items?.map((item, index) => {
            const iconData = amenityIcons.find((i) => i.name === item.icon);

            const Icon = iconData?.icon;

            return (
              <div
                key={item._id || index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#f9f4e8] flex items-center justify-center mb-5">
                  {Icon && (
                    <Icon
                      className="w-8 h-8 text-[#ab8c51]"
                      strokeWidth={1.5}
                    />
                  )}
                </div>

                <div
                  className="hd text-[#5c5e62] text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: item.description || "",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
