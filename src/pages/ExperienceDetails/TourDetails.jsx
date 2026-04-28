"use client";

import React, { useState, useEffect } from "react";

import { getActivityBySlug } from "../../api/activityApi";
import { Check, X } from "lucide-react"; // icons for includes/excludes
import { BsArrowReturnRight } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti";
import { PiArrowBendDownRightFill } from "react-icons/pi";

const ActivityDetails = ({slug}) => {

  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await getActivityBySlug(slug);
        setActivity(res.data);
      } catch (err) {
        console.error("Error fetching activity:", err);
      }
    };
    fetchActivity();
  }, [slug]);

  if (!activity)
    return <p className="text-center mt-10">Loading activity...</p>;

  return (
    <div className="max-w-[1140px] mx-auto  hd px-4 py-10 md:py-20 md:space-y-10 space-y-4">
      {/* 🌟 Highlights */}
      {activity.highlights?.length > 0 && (
        <div className=" hd flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Highlights
            </h3>
          </div>
          <div className=" w-full md:w-2/4">
            {/* <ul className="list-disc list-outside text-[#5c5e62] space-y-1">
              {activity.highlights.map((h, i) => (
                
                <li key={i}>
                  
                          <span className="mt-2 w-2 h-2  rounded-full bg-[#dbb563] shrink-0" />

                  <span>{h}</span>
                  </li>
              ))}
            </ul> */}
            <ul className="space-y-2">
              {activity.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 text-[#5c5e62] leading-relaxed"
                >
                  {/* Custom Bullet */}
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#dbb563] shrink-0" />

                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className=" h-[1px] bg-[#ebebeb] w-full md:w-3/4"></div>

      {/* 📝 Full Description */}
      {activity.fullDescription?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4">
            <h3 className="hd font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Full description
            </h3>
          </div>
          <div className=" w-full md:w-2/4 space-y-2 text-[#5c5e62] leading-relaxed">
            {activity.fullDescription.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
        </div>
      )}
      <div className=" h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

      {/* ✅ Includes / ❌ Excludes */}
      {(activity.include?.length > 0 || activity.exclude?.length > 0) && (
        <div>
          <div className="flex flex-col md:flex-row mb-4 md:mb-8">
            <div className=" w-full md:w-1/4">
              <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
                Includes
              </h3>
            </div>
            <div className="w-full md:w-2/4 space-y-2">
              {activity.include?.map((item, i) => (
                <div key={i} className="flex  text-[#2e2c2d]">
                  <Check className="text-green-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5 " />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className=" h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

          <div className=" flex flex-col md:flex-row mt-4 md:mt-8">
            <div className=" w-full md:w-1/4">
              <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
                Excludes
              </h3>
            </div>
            <div className=" w-full md:w-2/4 space-y-2">
              {activity.exclude?.map((item, i) => (
                <div key={i} className="flex  text-[#2e2c2d]">
                  <X className="text-red-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className=" h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

      {/* {activity.importantInfo && (
        <div className="hd flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Important <br className="hidden md:inline" /> information
            </h3>
          </div>
          <div className=" w-full md:w-2/4">
            <p className="font-[500] text-[#2e2c2d] mb-2">Know before you go</p>
            <p className="hd text-[#5c5e62]">{activity.importantInfo}</p>
          </div>
        </div>
      )} */}

      {activity.importantInfo?.length > 0 && (
        <div className="hd flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Important <br className="hidden md:inline" /> information
            </h3>
          </div>

          <div className="w-full md:w-2/4 space-y-3">
            <p className="font-[500] text-[#2e2c2d] mb-2">Know before you go</p>

            {activity.importantInfo.map((block, i) => {
              if (block.type === "header") {
                return (
                  <h4 key={i} className="font-semibold text-[#2e2c2d] mt-3">
                    {block.content}
                  </h4>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-[#5c5e62] font-medium  leading-relaxed"
                  >
                    {/* Icon Bullet */}
                    <PiArrowBendDownRightFill className=" text-2xl text-[#af945d] shrink-0" />
                    {/* Text */}
                    <p>{block.content}</p>
                  </div>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-2 pl-6">
                    {(Array.isArray(block.content) ? block.content : []).map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#5c5e62] leading-relaxed"
                        >
                          {/* Bullet */}
                          <span className="mt-2 w-2 h-2 ml-8 rounded-full bg-[#dbb563] shrink-0" />

                          {/* Text */}
                          <span>{item}</span>
                        </li>
                      ),
                    )}
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

export default ActivityDetails;
