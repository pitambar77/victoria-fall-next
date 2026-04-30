import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PropertyCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[240px] h-[160px] rounded-lg overflow-hidden">
      <img src={images[index]} className="w-full h-full object-cover" />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 bg-black/40 text-white p-1 rounded-full"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 bg-black/40 text-white p-1 rounded-full"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
