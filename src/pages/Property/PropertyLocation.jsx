import React from "react";

const PropertyLocation = () => {
  return (
    <div className=" max-w-[1140px] mx-auto px-4 py-5 sm:py-10">
 <div className="relative w-full h-[500px] ">
      <div className="absolute inset-0  ">
        {/* You would replace this with your actual map component (e.g., from react-google-maps, leaflet, etc.) */}

        <iframe
          className=" w-full h-full rounded-md "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27503528.108134907!2d5.854311110667569!3d-32.70294682224043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sin!4v1758709373155!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
    </div>
   
  );
};

export default PropertyLocation;
