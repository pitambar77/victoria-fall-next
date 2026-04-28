import React, { useState, useEffect } from 'react';

const Modal = ({ images, initialIndex, closeModal }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    // Sync the current index when the modal opens with a new initial index
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, closeModal]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-[12%]">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white text-4xl leading-none font-light opacity-80 hover:opacity-100 transition-opacity duration-200"
      >
        &times;
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 p-2 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        &lsaquo;
      </button>

      {/* Image */}
      <img
        src={images[currentIndex].url}
        alt={`Gallery image ${currentIndex + 1}`}
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
      />

      <button
        onClick={handleNext}
        className="absolute right-4 p-2 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default Modal;