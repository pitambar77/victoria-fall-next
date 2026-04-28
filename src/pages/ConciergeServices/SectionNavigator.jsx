import React from "react";
import Link from "next/link";

const sections = [
 { id: "make-at-home", label: "Make Yourself at Home" },
  { id: "culture-entertainment", label: "CULTURE & ENTERTAINMENT" },
  { id: "beauty-wellbeing", label: "BEAUTY & WELL-BEING" },
  { id: "private-events", label: "PRIVATE EVENTS" },
  { id: "food-hall", label: "Food Hall" },
  { id: "victoria-falls-experiences", label: " EXPERIENCE" },

];

const SectionNavigator = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-[#c7c2b5]/90 md:py-16 py-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3 items-center text-center">
        {sections.map((s, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(s.id)}
            className="hd text-white uppercase cursor-pointer tracking-[0.2em] text-[16px] font-[500]  border-b border-white w-4/5 md:w-1/2 py-2 hover:opacity-80 transition-opacity duration-200"
          >
            {s.label}
           
          </button>
        ))}

         {/* <Link href="/victoria-falls-experiences" className="hd text-white uppercase cursor-pointer tracking-[0.2em] text-[16px] font-[500]  border-b border-white w-4/5 md:w-1/2 py-2 hover:opacity-80 transition-opacity duration-200">EXPERIENCE</Link> */}

      </div>
    </section>
  );
};

export default SectionNavigator;
