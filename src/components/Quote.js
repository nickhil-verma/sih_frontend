import React from 'react';
import Marquee from "react-fast-marquee";
import MK from "../img/mk.jpg";
import NEHRU from "../img/nehru.jpg";
import sardar from "../img/sardar.webp";
import BR from "../img/BR.jpg";
import APJ from "../img/download.jpeg";

const Quote = () => {

  const politicalQuotes = [
    { name: "Mahatma Gandhi", quote: "Education is the most powerful weapon which you can use to change the world.", image: MK },
    { name: "Dr. B.R. Ambedkar", quote: "Cultivation of mind should be the ultimate aim of human existence.", image: BR },
    { name: "Jawaharlal Nehru", quote: "At the dawn of history, India started on her unending quest, and trackless centuries are filled with her striving and the grandeur of her successes and her failures.", image: NEHRU },
    { name: "Sardar Vallabhbhai Patel", quote: "What we really are matters more than what we say.", image: sardar },
    { name: "APJ Abdul Kalam", quote: "Education is the most powerful tool which you can use to change the world.", image: APJ }
  ];

  return (
    <div id="Crew" className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Famous Quotes on Education</h1>
      <div className="relative overflow-hidden">
        <Marquee gradient gradientColor='#F9FAFB' gradientWidth={100} speed={20} pauseOnHover direction="left">
          <div className="grid grid-cols-5 gap-6">
            {politicalQuotes.map((member) => (
              <div key={member.name} className="w-72 border-[1px] border-gray-300 bg-white rounded-lg p-6 flex flex-col items-center">
                <img src={member.image} alt={member.name} className="w-20 h-20 object-cover rounded-full mb-4" />
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 italic">{`"${member.quote}"`}</p>
              </div>
            ))}
          </div>
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Quote;
