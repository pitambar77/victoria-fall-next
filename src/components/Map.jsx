import React from "react";
import { FaFacebook } from "react-icons/fa6";

const Map = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-gray-200">
        {/* You would replace this with your actual map component (e.g., from react-google-maps, leaflet, etc.) */}

        {/* <iframe className=' w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27503528.108134907!2d5.854311110667569!3d-32.70294682224043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sin!4v1758709373155!5m2!1sen!2sin" ></iframe> */}
        <iframe
          className=" w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.172393563457!2d31.026211275690134!3d-29.801563520056302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70706b0a7a943%3A0xd765ffd9528908d!2sLodge%2C%2034%2C%201%20Underwood%20Rd%2C%20Athlone%2C%20Durban%20North%2C%204051%2C%20South%20Africa!5e0!3m2!1sen!2sin!4v1770480105787!5m2!1sen!2sin"
        ></iframe>
      </div>

      {/* Contact Card Overlay */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 w-full max-w-sm p-8 bg-white shadow-2xl rounded-md">
        <h2 className="text-xl hd mb-6">Contact us</h2>

        {/* Address */}
        <div className="flex items-start mb-4">
          <span className="mr-2 text-[#2e2c2d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="text-sm hd text-[#2e2c2d]">
            <p className="font-semibold ">ADDRESS</p>
            <p className=" leading-relaxed">
              1 Underwood Lodge,
              <br />
              34 Underwood Road Umgeni Park,
              <br />
              Durban 4050,
              <br />
              KwaZulu Natal,
              <br />
              South Africa
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start mb-4">
          <span className="mr-2 text-[#2e2c2d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.103 6.103l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-11a3 3 0 01-3-3V3z" />
            </svg>
          </span>
          <div className="text-sm text-[#2e2c2d]">
            <p className="font-semibold text-[#2e2c2d]">PHONE</p>
            <p className="text-[#2e2c2d]">+27(0)315352811</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start mb-4">
          <span className="mr-2 text-[#2e2c2d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          <div className="text-sm text-[#2e2c2d]">
            <p className="font-semibold ">EMAIL</p>
            <p className="">Send enquiry</p>
          </div>
        </div>

        {/* Get Directions */}
        <div className="flex items-start mb-6">
          <span className="mr-2 text-[#2e2c2d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L14.414 5A2 2 0 0115 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="text-sm">
            <p className="font-semibold text-[#2e2c2d]">GPS</p>
            <a
              href="https://www.google.com/maps/place/Lodge,+34,+1+Underwood+Rd,+Athlone,+Durban+North,+4051,+South+Africa/@-29.801568,31.028786,17z/data=!4m5!3m4!1s0x1ef70706b0a7a943:0xd765ffd9528908d!8m2!3d-29.8015682!4d31.0287862?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              className="text-[#2e2c2d] hover:underline"
            >
              Get directions
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold text-[#2e2c2d] mb-2">
            Social media
          </h3>
          <div className="flex space-x-4">
            {/* <a href="#" className="flex items-center text-[#2e2c2d] hover:text-gray-800 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.284.15 4.935 1.797 5.085 5.082.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.15 3.284-1.797 4.935-5.082 5.085-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.284-.15-4.935-1.797-5.085-5.082-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.15-3.284 1.797-4.935 5.082-5.085zM12 4.673c-2.43 0-2.7.01-3.66.053-.96.042-1.7.358-2.31.968-.61.61-.926 1.35-.968 2.31-.043.96-.053 1.23-.053 3.66s.01 2.7.053 3.66c.042.96.358 1.7.968 2.31.61.61 1.35.926 2.31.968.96.043 1.23.053 3.66.053s2.7-.01 3.66-.053c.96-.042 1.7-.358 2.31-.968.61-.61.926-1.35.968-2.31.043-.96.053-1.23.053-3.66s-.01-2.7-.053-3.66c-.042-.96-.358-1.7-.968-2.31-.61-.61-1.35-.926-2.31-.968-.96-.043-1.23-.053-3.66-.053zm0 4.025a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm0 1.6a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4zm5.825-4.225a.8.8 0 100 1.6.8.8 0 000-1.6z"/></svg>
              Instagram
            </a> */}
            <a
              href="https://www.facebook.com/wheretoafrica/"
              className="flex items-center text-[#2e2c2d] hover:text-gray-800 transition duration-200"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2v2h2v2h-2v2h-2v-2h-2v-2h2v-2h-2V8h2V6h2v2h2V6h2v2h-2z" />
              </svg> */}
              <FaFacebook className=" mr-3" />

              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
