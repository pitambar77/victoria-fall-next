
import React, { useEffect, useState } from "react";
import { getProperties } from "../../../api/propertyApi";
import Link from "next/link";

const PropertiesCards = () => {
  //Backend instegration start

  const [properties, setProperties] = useState([]);

  const loadProperties = async () => {
    const res = await getProperties();
    setProperties(res.data);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  //Backend instegration end

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // how many cards per page

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / cardsPerPage);

  //   const sectionRef = useRef(null);

  // Get current page data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = properties.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      //  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-[#faf8f1] py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((resort, index) => (
            <div
              key={`${resort.id}-${index}`}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group "
            >
              <Link href={`/properties/${resort.slug}`}>
                {/* Image */}
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={resort.bannerImage}
                    alt={resort.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className=" hd transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md">
                    <p className="text-[#aca188] text-sm capitalize">
                      {resort.address1}
                    </p>
                    <h3 className="text-[16px] font-[500] text-[#2e2c2d] capitalize mt-1">
                      {resort.name}
                    </h3>
                    <p className=" hd mt-2  text-[12px] font-[500] uppercase text-sky-500 ">
                      {resort.propertyType}
                    </p>
                    {/* Tags */}
                    {/* <div className="mt-2 flex flex-wrap gap-2 text-[12px] font-[500]">
                      {resort.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`${
                            tag === "SAFARI"
                              ? "text-red-500"
                              : tag === "BEACH"
                              ? "text-teal-500"
                              : tag === "WELLNESS"
                              ? "text-sky-500"
                              : tag === "ADVENTURE"
                              ? "text-orange-500"
                              : tag === "FAMILY-FRIENDLY"
                              ? "text-green-600"
                              : "text-gray-800"
                          }`}
                        >
                          {tag}
                          {idx !== resort.tags.length - 1 && " /"}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="hd flex justify-center items-center mt-10 space-x-2">
          {/* Previous button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx + 1)}
              className={`px-3 py-1 rounded-md border border-[#aca188] text-sm ${
                currentPage === idx + 1
                  ? "bg-[#aca188] text-white"
                  : "bg-white text-[#2e2c2d]  hover:bg-gray-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCards;
