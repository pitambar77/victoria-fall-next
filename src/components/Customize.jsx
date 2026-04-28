"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";


const Customize = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Get a Personalized Plan",
      description:
        "Receive a tailored itinerary designed around your interests, travel dates, and preferences.",
      icon: (
        
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g
            id="SVGRepo_tracerCarrier"
            
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
              stroke="#ffffff"
              
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Customize Your Experience",
      description:
        "Select your preferred activities, accommodation, dining, and adventures while we refine every detail.",
      icon: (
        <svg
          fill="#ffffff"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          
        >
          <g id="SVGRepo_bgCarrier" ></g>
          <g
            id="SVGRepo_tracerCarrier"
           
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M31.999 13.008l-0-10.574c0-1.342-1.092-2.434-2.433-2.434h-10.793c-0.677 0-1.703 0-2.372 0.67l-15.81 15.811c-0.38 0.38-0.59 0.884-0.59 1.421 0 0.538 0.209 1.043 0.589 1.423l12.088 12.085c0.379 0.381 0.883 0.59 1.421 0.59s1.042-0.209 1.421-0.589l15.811-15.812c0.678-0.677 0.674-1.65 0.67-2.591zM29.915 14.186l-15.826 15.811-12.086-12.101 15.794-15.797c0.159-0.099 0.732-0.099 0.968-0.099l0.45 0.002 10.35-0.002c0.239 0 0.433 0.195 0.433 0.434v10.582c0.002 0.38 0.004 1.017-0.084 1.169zM24 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM24 10c-1.105 0-2-0.896-2-2s0.895-2 2-2 2 0.896 2 2-0.895 2-2 2z"></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Confirm & Start Your Journey",
      description:
        "Once everything is perfect, confirm your plan and get ready for an unforgettable Victoria Falls escape",
      icon: (
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g
            id="SVGRepo_tracerCarrier"
            
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7.5 1H8C8 0.810614 7.893 0.637482 7.72361 0.552786L7.5 1ZM7.5 2L7.72361 2.44721C7.893 2.36252 8 2.18939 8 2H7.5ZM6.5 2.5L6.27639 2.05279C6.11697 2.1325 6.01204 2.29104 6.00097 2.46893C5.98989 2.64682 6.07435 2.81716 6.22265 2.91603L6.5 2.5ZM8 3.5L7.72265 3.91603C7.80478 3.97078 7.90129 4 8 4V3.5ZM8.5 3.5V4C8.77614 4 9 3.77614 9 3.5H8.5ZM8.5 2.5V2C8.22386 2 8 2.22386 8 2.5H8.5ZM10 2.5H10.5C10.5 2.22386 10.2761 2 10 2V2.5ZM10 3.5H9.5C9.5 3.63261 9.55268 3.75979 9.64645 3.85355L10 3.5ZM10.5 4H11C11 3.86739 10.9473 3.74021 10.8536 3.64645L10.5 4ZM10.5 5L10.8536 5.35355C10.9473 5.25979 11 5.13261 11 5H10.5ZM10 5.5V6C10.1326 6 10.2598 5.94732 10.3536 5.85355L10 5.5ZM9 5.5L8.77639 5.94721C8.84582 5.98193 8.92238 6 9 6V5.5ZM7 4.5L7.22361 4.05279C7.08284 3.9824 6.91716 3.9824 6.77639 4.05279L7 4.5ZM6 5V5.5C6.07762 5.5 6.15418 5.48193 6.22361 5.44721L6 5ZM4.5 5V4.5C4.27057 4.5 4.07057 4.65615 4.01493 4.87873L4.5 5ZM4 7L3.51493 6.87873C3.47233 7.04912 3.52226 7.22936 3.64645 7.35355L4 7ZM5.5 8.5L5.14645 8.85355C5.18445 8.89155 5.22833 8.92318 5.27639 8.94721L5.5 8.5ZM6.5 9H7C7 8.81061 6.893 8.63748 6.72361 8.55279L6.5 9ZM6.5 10.5H6C6 10.6326 6.05268 10.7598 6.14645 10.8536L6.5 10.5ZM7 11H7.5C7.5 10.8674 7.44732 10.7402 7.35355 10.6464L7 11ZM7 12H6.5C6.5 12.0776 6.51807 12.1542 6.55279 12.2236L7 12ZM7.5 13L7.05279 13.2236C7.13748 13.393 7.31061 13.5 7.5 13.5V13ZM8.5 13V13.5C8.66718 13.5 8.82329 13.4164 8.91603 13.2774L8.5 13ZM9.5 11.5L9.91603 11.7774C9.92753 11.7601 9.93794 11.7422 9.94721 11.7236L9.5 11.5ZM10 10.5L10.4472 10.7236C10.4819 10.6542 10.5 10.5776 10.5 10.5H10ZM10 9.5L9.6 9.2C9.53509 9.28655 9.5 9.39182 9.5 9.5H10ZM11.5 7.5L11.9 7.8C12.0136 7.64849 12.0319 7.44579 11.9472 7.27639L11.5 7.5ZM11 6.5V6C10.8267 6 10.6658 6.08973 10.5747 6.23713C10.4836 6.38454 10.4753 6.56861 10.5528 6.72361L11 6.5ZM12.5 6.5V7C12.7761 7 13 6.77614 13 6.5H12.5ZM12.5 5.5V5C12.2239 5 12 5.22386 12 5.5H12.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM6.27639 0.947214L7.27639 1.44721L7.72361 0.552786L6.72361 0.0527864L6.27639 0.947214ZM7 1V2H8V1H7ZM7.27639 1.55279L6.27639 2.05279L6.72361 2.94721L7.72361 2.44721L7.27639 1.55279ZM6.22265 2.91603L7.72265 3.91603L8.27735 3.08397L6.77735 2.08397L6.22265 2.91603ZM8 4H8.5V3H8V4ZM9 3.5V2.5H8V3.5H9ZM8.5 3H10V2H8.5V3ZM9.5 2.5V3.5H10.5V2.5H9.5ZM9.64645 3.85355L10.1464 4.35355L10.8536 3.64645L10.3536 3.14645L9.64645 3.85355ZM10 4V5H11V4H10ZM10.1464 4.64645L9.64645 5.14645L10.3536 5.85355L10.8536 5.35355L10.1464 4.64645ZM10 5H9V6H10V5ZM9.22361 5.05279L7.22361 4.05279L6.77639 4.94721L8.77639 5.94721L9.22361 5.05279ZM6.77639 4.05279L5.77639 4.55279L6.22361 5.44721L7.22361 4.94721L6.77639 4.05279ZM6 4.5H4.5V5.5H6V4.5ZM4.01493 4.87873L3.51493 6.87873L4.48507 7.12127L4.98507 5.12127L4.01493 4.87873ZM3.64645 7.35355L5.14645 8.85355L5.85355 8.14645L4.35355 6.64645L3.64645 7.35355ZM5.27639 8.94721L6.27639 9.44721L6.72361 8.55279L5.72361 8.05279L5.27639 8.94721ZM6 9V10.5H7V9H6ZM6.14645 10.8536L6.64645 11.3536L7.35355 10.6464L6.85355 10.1464L6.14645 10.8536ZM6.5 11V12H7.5V11H6.5ZM6.55279 12.2236L7.05279 13.2236L7.94721 12.7764L7.44721 11.7764L6.55279 12.2236ZM7.5 13.5H8.5V12.5H7.5V13.5ZM8.91603 13.2774L9.91603 11.7774L9.08397 11.2226L8.08397 12.7226L8.91603 13.2774ZM9.94721 11.7236L10.4472 10.7236L9.55279 10.2764L9.05279 11.2764L9.94721 11.7236ZM10.5 10.5V9.5H9.5V10.5H10.5ZM10.4 9.8L11.9 7.8L11.1 7.2L9.6 9.2L10.4 9.8ZM11.9472 7.27639L11.4472 6.27639L10.5528 6.72361L11.0528 7.72361L11.9472 7.27639ZM11 7H12.5V6H11V7ZM13 6.5V5.5H12V6.5H13ZM12.5 6H14.5V5H12.5V6Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-[1140px] mx-auto md:py-20 py-10 px-4">
      <div className="text-center">
        {/* Header */}
        <h2 className="hd text-center md:text-[30px] text-[20px] mb-6 font-semibold text-[#2e2c2d] tracking-[3px] max-w-2xl mx-auto uppercase">
          Ready to Plan Your Victoria Falls Experience?
        </h2>

        <p className="hd text-[#2e2c2d] capitalize mb-12 text-md flex justify-center">
          Discover how easy it is to design your perfect stay and experiences in
          Victoria Falls.
        </p>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-start">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-[110px] left-0 right-0 h-[1px] bg-[#d9d6ce]"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="w-full md:w-1/3 text-center mb-10 md:mb-0 relative"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Title */}
              <h3 className="hd text-[16px] font-semibold text-[#5c5e62] mb-10">
                {step.title}
              </h3>

              {/* Circle container (fixed height so layout doesn't move) */}
              <div className="relative h-[90px] flex justify-center items-center z-10">
                <div
                  className={`flex items-center justify-center rounded-full bg-[#ACA188] transition-all duration-300
                  ${hoveredStep === step.id ? "w-20 h-20" : "w-6 h-6"}`}
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      hoveredStep === step.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="hd text-[#5c5e62] leading-relaxed text-sm max-w-xs mx-auto mt-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center hd mt-8">
          <Button>
            <Link href="https://api.whatsapp.com/send?phone=%2B27765599823" target="_blank" >
              +27 76 559 9823
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
