// src/components/StatCard.jsx
import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatCard = ({ icon, title, value, color, trend }) => {
  const trendValue = parseInt(trend); // Convert trend to number for comparison
  const isPositiveTrend = trendValue >= 0;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4">
      {icon} {/* The icon passed as a prop */}
      <div>
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <div className="flex items-baseline mt-1">
          <p className="text-2xl font-bold text-gray-100">{value}</p>
          {trend && (
            <span
              className={`ml-2 text-xs flex items-center ${isPositiveTrend ? 'text-green-500' : 'text-red-500'}`}
            >
              {isPositiveTrend ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
              {Math.abs(trendValue)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;