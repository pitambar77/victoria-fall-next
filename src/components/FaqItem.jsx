import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // You'll need to install 'lucide-react' for the icons

// You can use a local SVG or another icon library if you prefer not to install lucide-react.

const faqData = [
  {
    question: 'What is the minimum age requirement to stay at Babohi Lodge?',
    answer: 'The minimum age requirement for guests is typically 12 years old. However, this may vary depending on the specific booking and time of year. Please contact the lodge directly for definitive information regarding children.',
  },
  {
    question: 'How do I travel from Johannesburg to Babohi at QIWABI?',
    answer: 'Guests can travel by a scheduled or private charter flight directly to the nearby airstrip, or opt for a scenic self-drive (approximately 4-5 hours) from Johannesburg. We recommend confirming directions and road conditions closer to your travel date.',
  },
  {
    question: 'Which wildlife species can I expect to see on game drives?',
    answer: 'Babohi is home to the Big Five (lion, leopard, rhino, elephant, and buffalo), along with a diverse range of other species, including cheetah, giraffe, zebra, and various antelope species. Bird watching is also exceptional.',
  },
  {
    question: 'Are game drives included in the accommodation rate?',
    answer: 'Yes, typically two guided game drives per day (morning and afternoon/evening) are included in the fully inclusive accommodation rate.',
  },
  {
    question: 'What dining experiences are offered at Babohi Lodge?',
    answer: 'We offer a range of dining experiences, including formal dinners in the main lodge, boma (outdoor) dinners under the stars, bush breakfasts, and private dining upon request. All meals are prepared by our gourmet chefs.',
  },
  {
    question: 'Does Babohi Lodge provide airport transfers?',
    answer: 'Yes, Babohi Lodge can arrange return airport transfers from the local airstrip. This service may incur an additional charge and should be booked in advance of your arrival.',
  },
  {
    question: 'What should I pack for a stay at Babohi?',
    answer: 'We recommend light clothing in neutral colours for game drives, a warm jacket for early mornings/evenings, a wide-brimmed hat, sunscreen, insect repellent, and comfortable walking shoes. Don\'t forget your camera!',
  },
  {
    question: 'What is Babohi Lodge\'s cancellation policy?',
    answer: 'Our cancellation policy varies based on the season and how far in advance the booking is cancelled. We advise guests to review the specific terms provided at the time of booking or contact us for details.',
  },
];

/**
 * A reusable component for a single FAQ item.
 * Uses the 'isOpen' state to control the visibility of the answer.
 */
// const FaqItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border-b border-gray-300">
//       {/* Question and Toggle Button */}
//       <button
//         className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
//         onClick={onClick}
//       >
//         <span className=" hd text-[#2e2c2d]">
//           {question}
//         </span>
//         {/* Icon (ChevronDown or ChevronUp) */}
//         {isOpen ? (
//           <ChevronUp className="w-5 h-5 text-[#2e2c2d]" />
//         ) : (
//           <ChevronDown className="w-5 h-5 text-[#2e2c2d]" />
//         )}
//       </button>

//       {/* Answer */}
//       {isOpen && (
//         <div className="py-4 pt-0 text-base text-gray-600">
//           <p>{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      {/* Question and Toggle Button */}
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="hd text-[#2e2c2d]">{question}</span>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#2e2c2d]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#2e2c2d]" />
        )}
      </button>

      {/* Animated Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-base text-gray-600">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};


/**
 * The main FAQ section component.
 */
const FaqSection = () => {
  // State to track the index of the currently open FAQ item.
  // -1 means no item is open (accordion style).
  const [openIndex, setOpenIndex] = useState(-1);

  // Function to handle the click and toggle the open state.
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-10 md:py-12">
      {/* Title - styled to match the image's font and color (assuming a dark bronze/gold for the title) */}
      <h2 
        className=" hd text-xl md:text-[30px] text-center mb-4 md:mb-8 font-semibold text-[#2e2c2d] tracking-[3px] uppercase"
        // Approximate style for the 'FAQs' title
      >
        FAQs
      </h2>

      {/* FAQ List */}
      <div className=" hd  w-full">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;