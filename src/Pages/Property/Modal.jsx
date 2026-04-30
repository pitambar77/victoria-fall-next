// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Backdrop (Semi-transparent overlay)
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose} // Allows closing by clicking outside the content area
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the form
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Modal Content (The Booking Form) */}
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;