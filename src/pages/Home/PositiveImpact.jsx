import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const PositiveImpact = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 ">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {/* Left Image */}
        <div className="h-[600px] w-full">
          <img
            src="https://naturalselection.travel/wp-content/uploads/2024/10/Mokoro-safari2-1.jpg" // replace with your image
            alt="Impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex items-center justify-center px-10 md:px-20 py-16">
          <div className="max-w-lg">
            <p className="tracking-[4px] text-gray-500 text-sm mb-4 uppercase">
              Natural Selection
            </p>

            <h2 className="text-5xl font-serif text-[#b3895b] leading-tight mb-6">
              OUR <span className="italic font-light">positive</span> IMPACT
            </h2>

            <p className="hd text-[#5c5e62] leading-relaxed mb-8">
              Natural Selection was founded with the purpose of protecting
              Africa’s important wildlife areas for the benefit of future
              generations. We are equally committed to local communities through
              our employment policy and the implementation of community
              empowerment projects in nearby villages. All the projects we fund
              reflect our goal of being part of Africa’s long-term conservation
              solution.
            </p>
            <Button>
              <Link className="">
                OUR IMPACT - LEARN MORE
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositiveImpact;
