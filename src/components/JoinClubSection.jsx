"use client"

import React, { useState } from 'react';
import Button from './Button';

const JoinClubSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to a server
    console.log({ name, email, agreed });
    alert('Subscription attempt logged to console!');
  };

  return (
    <div
      className="relative bg-cover bg-center h-[500px] sm:h-[600px] flex items-center justify-center px-4 "
      style={{ backgroundImage: 'url("https://africanscenicsafaris.com/blog/wp-content/uploads/2025/05/off-the-beaten-path-tanzania-safari-packages-you-need-to-experience-banner-scaled.webp")' }} // Replace with your image URL
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-lg mx-auto">
        <h2 className="hd text-center text-[20px] md:text-[30px] mb-6 font-semibold  tracking-[3px] uppercase">
          JOIN THE CLUB
        </h2>
        <p className=" hd text-sm mb-10  tracking-[1px]  ">
          Sign up to start your journey and be the first to receive early access to exclusive
          offers, inspiring stories, and the latest news from across the Rothschild Safaris globe.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 hd ">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 md:py-3 bg-transparent border border-gray-400 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address*"
            required
            className="w-full px-4 py-2 md:py-3 bg-transparent border border-gray-400 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex items-start justify-center mt-6">
            <input
              type="checkbox"
              id="agreement"
              className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-400 rounded cursor-pointer mr-3"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agreement" className=" hd text-sm text-gray-200 text-left cursor-pointer">
              By subscribing I agree to receive the latest travel updates, stories, and inspiration.
            </label>
          </div>

          <Button
            type="submit"
            
          >
            Subscribe now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JoinClubSection;