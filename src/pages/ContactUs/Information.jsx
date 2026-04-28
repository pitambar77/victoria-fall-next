import React from "react";

const Information = () => {
  // Define custom styles for reuse
  const accentColor = "text-[#aca188]"; // Text color for icons and labels
  const darkColor = "text-[#2e2c2d]";   // Text color for headings
  const baseColor = "text-[#5c5e62]";   // Text color for body/details
  const borderColor = "border-[#aca188]"; // Border color

  return (
    <>
      <div className=" py-10 md:py-20 bg-amber-50/60 px-4">
        <h2 className={`max-w-xl mx-auto text-xl md:text-[30px] mb-6 font-semibold ${darkColor} text-center tracking-[3px] uppercase`}>
          Get In Touch
        </h2>
        <p className={`max-w-2xl mx-auto text-center ${baseColor} tracking-[1px] mb-10`}>
          Contact us at our South African or Zimbabwean Offices below.
        </p>

        <div className="max-w-[1140px] mx-auto">
          {/* --- Durban, South Africa Section --- */}
          <div className="flex flex-col lg:flex-row items-center justify-between py-8">
            
            {/* Left Section (Image): Set to lg:w-1/2 */}
            <div className="relative flex items-center justify-center lg:w-1/2 p-4 lg:pr-12 mb-12 lg:mb-0">
              {/* Large Half Circle Border (NO DOT) */}
              <div className={`absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] border-dotted rounded-t-full border-2 ${borderColor}`}></div>

              {/* Image */}
              <img
                src="https://i.natgeofe.com/n/d96a70b4-4def-4a23-8272-d1b40751d306/safariloisaba-tented-camp-double-tent-7hr.jpg"
                alt="African Safari Camp"
                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-t-full object-cover shadow-lg"
              />
            </div>

            {/* Right Section (Details): Set to lg:w-1/2 */}
            <div className="flex flex-col justify-center lg:w-1/2 p-4 lg:pl-12">
              <h2 className={` text-xl md:text-[30px] text-center md:text-start font-semibold ${darkColor} tracking-[3px] uppercase mb-10`}>
                Durban, South Africa
              </h2>

              <div className=" space-y-4 md:space-y-8 ">
                {/* Contact Number */}
                <ContactDetail icon="phone" title="Contact Number" details={["+27(0)315352811", "+27(0)315352811", "+27(0)315352811"]} accentColor={accentColor} baseColor={baseColor} />

                {/* Email ID */}
                <ContactDetail icon="mail" title="Email id" details={["res@todo.africa"]} accentColor={accentColor} baseColor={baseColor} />

                {/* Address */}
                <ContactDetail icon="home" title="Address" details={["1 Underwood Lodge, 34 Underwood Road Umgeni Park, Durban 4050, KwaZulu Natal, South Africa"]} accentColor={accentColor} baseColor={baseColor} />
              </div>
            </div>
          </div>

          {/* --- Victoria Falls, Zimbabwe Section --- */}
          <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4">
            
            {/* Left Section (Details): Set to lg:w-1/2 */}
            <div className="flex flex-col justify-center lg:w-1/2  order-2 lg:order-1">
              <h2 className={` text-xl md:text-[30px] text-center md:text-start font-semibold ${darkColor} tracking-[3px] uppercase mb-10`}>
                Victoria Falls, Zimbabwe
              </h2>

              <div className=" space-y-4 md:space-y-8">
                {/* Contact Number */}
                <ContactDetail icon="phone" title="Contact Number" details={["+27(0)315352811", "+27(0)315352811", "+27(0)315352811"]} accentColor={accentColor} baseColor={baseColor} />

                {/* Email ID */}
                <ContactDetail icon="mail" title="Email id" details={["spiwe@whereto.africa"]} accentColor={accentColor} baseColor={baseColor} />

                {/* Address */}
                <ContactDetail icon="home" title="Address" details={["1 Mallet Drive, Victoria Falls, Zimbabwe"]} accentColor={accentColor} baseColor={baseColor} />
              </div>
            </div>
            
            {/* Right Section (Image): Set to lg:w-1/2 */}
            <div className="relative flex items-center justify-center lg:w-1/2 p-4 order-1 lg:order-2 mb-12 lg:mb-0 ">
              {/* Large Half Circle Border (NO DOT) */}
              <div className={`absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-t-full border-dotted border-2 ${borderColor}`}></div>
              
              {/* Image */}
              <img
                src="https://cdn.mahlatini.com/destinations/south-africa/greater-kruger/kambaku-safari-lodge/_2400x1350_crop_center-center_none/kambaku-safari-lodge-lodge-reception-2400.jpg"
                alt="African Lodge Reception"
                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-t-full object-cover shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// --- Helper Component for Icons and Details ---
const ContactDetail = ({ icon, title, details, accentColor, baseColor }) => {
  const iconMap = {
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  };

  return (
    <div className="flex items-start ">
      <span className={`mr-4 ${accentColor}`}>{iconMap[icon]}</span>
      <div className="flex-1">
        <p className={`text-[18px] ${accentColor} font-[500] mb-1`}>{title}:</p>
        {details.map((detail, index) => (
          <p key={index} className={`${baseColor} tracking-[1px]`}>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Information;