import { useState, useEffect } from "react";

export default function PropertyTabs() {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "amenities", label: "Amenities" },
    { id: "location", label: "Location" },

    { id: "policies", label: "Policies" },
  ];

  const [active, setActive] = useState("overview");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  /* Detect active section while scrolling */
  useEffect(() => {
    const handleScroll = () => {
      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(tab.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hd sticky top-0 z-40 bg-white ">
      <div className="max-w-[1170px] mx-auto flex gap-10 border-b border-b-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`hd py-4 z-9  text-lg text-[#2e2c2d] border-b-2 cursor-pointer transition
              ${
                active === tab.id
                  ? "border-[[#ab8c51]] text-[#ab8c51]"
                  : "border-transparent text-gray-700 hover:text-[#ab8c51]"
              }
            `}
          >
            <h3>
              {tab.label}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
}
