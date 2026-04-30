import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { PiArrowBendDownRightFill } from "react-icons/pi";

/* ---------- STATIC DATA ---------- */
const activityData = {
  slug: "victoria-falls-helicopter-tour",

  highlights: [
    "Enjoy breathtaking aerial views of Victoria Falls",
    "Fly above the Zambezi River and Batoka Gorge",
    "Experience the famous Flight of Angels",
    "Perfect for photography lovers",
  ],

  fullDescription: [
    "Take to the skies for an unforgettable helicopter ride above Victoria Falls.",
    "You will see the falls, Batoka Gorge and the Zambezi River from above.",
    "This experience is perfect for travelers wanting a unique perspective.",
  ],

  include: [
    "Professional helicopter pilot",
    "Safety briefing",
    "Hotel pickup and drop-off",
  ],

  exclude: ["National park entry fees", "Tips", "Personal expenses"],

  importantInfo: [
    { type: "header", content: "Requirements" },
    {
      type: "paragraph",
      content: "Passengers must show valid identification.",
    },

    { type: "header", content: "What to bring" },
    { type: "list", content: ["Passport", "Camera", "Comfortable clothing"] },
  ],
};

const DetailsSection = () => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    // use static data
    setActivity(activityData);
  }, []);

  if (!activity)
    return <p className="text-center mt-10">Loading activity...</p>;

  return (
    <div className="max-w-[1140px] mx-auto hd px-4 py-10 md:py-20 md:space-y-10 space-y-4">

      {/* Highlights */}
      {activity.highlights?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Highlights
            </h3>
          </div>

          <div className="w-full md:w-2/4">
            <ul className="space-y-2">
              {activity.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 text-[#5c5e62] leading-relaxed"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#dbb563]" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="h-[1px] bg-[#ebebeb] w-full md:w-3/4"></div>

      {/* Full Description */}
      {activity.fullDescription?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Full description
            </h3>
          </div>

          <div className="w-full md:w-2/4 space-y-2 text-[#5c5e62] leading-relaxed">
            {activity.fullDescription.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
        </div>
      )}

      <div className="h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

      {/* Includes */}
      {activity.include?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Includes
            </h3>
          </div>

          <div className="w-full md:w-2/4 space-y-2">
            {activity.include.map((item, i) => (
              <div key={i} className="flex text-[#2e2c2d]">
                <Check className="text-green-600 w-5 h-5 mr-2 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

      {/* Excludes */}
      {activity.exclude?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Excludes
            </h3>
          </div>

          <div className="w-full md:w-2/4 space-y-2">
            {activity.exclude.map((item, i) => (
              <div key={i} className="flex text-[#2e2c2d]">
                <X className="text-red-600 w-5 h-5 mr-2 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

      {/* Important Info */}
      {activity.importantInfo?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Important information
            </h3>
          </div>

          <div className="w-full md:w-2/4 space-y-3">
            <p className="font-[500] text-[#2e2c2d] mb-2">
              Know before you go
            </p>

            {activity.importantInfo.map((block, i) => {

              if (block.type === "header") {
                return (
                  <h4 key={i} className="font-semibold text-[#2e2c2d]">
                    {block.content}
                  </h4>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <div key={i} className="flex gap-3 text-[#5c5e62]">
                    <PiArrowBendDownRightFill className="text-2xl text-[#af945d]" />
                    {block.content}
                  </div>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-2 pl-6">
                    {block.content.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-[#5c5e62]">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#dbb563]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsSection;