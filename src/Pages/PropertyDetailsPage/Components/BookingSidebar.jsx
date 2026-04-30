import Button from "../../../components/Button";

export default function BookingSidebar({ property, openBooking }) {
  return (
    <div className=" hd lg:sticky top-20 border border-gray-300 rounded-md p-6 shadow-sm h-fit">
      <h3 className="text-xl font-normal">${property.price}</h3>
      <p className="text-sm text-gray-300">per night</p>

      <div className="mt-6 space-y-3 ">
        <input type="date" className="w-full border rounded-lg p-2" />

        <input type="date" className="w-full border rounded-lg p-2" />

        <button 
        onClick={openBooking}
        className=" w-full text-white border-0 bg-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[10px] px-[20px] hover:bg-[#c40] transition-colors duration-300 cursor-pointer ease-out">
          Book Now
        </button>
    
      </div>
    </div>
  );
}
