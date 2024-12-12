import React from "react";
import Slider from "react-slick";
import { FaUsers, FaUniversity, FaAccessibleIcon, FaChartLine } from "react-icons/fa";

const Facts = () => {
  const factsData = [
    {
      title: "Number of Institutes for Disabled Students",
      fact: "Only 12% of the institutions in India are accessible to disabled students.",
      description: "These institutions are designed to cater to the special needs of physically and mentally disabled individuals, providing them with proper infrastructure and assistance.",
      icon: <FaUniversity className="text-4xl text-blue-500" />
    },
    {
      title: "Awareness of Accessible Institutions",
      fact: "Nearly 60% of disabled individuals are unaware of the educational institutions available to them.",
      description: "Lack of awareness about inclusive educational opportunities and institutions is one of the major barriers disabled students face in their academic journey.",
      icon: <FaAccessibleIcon className="text-4xl text-green-500" />
    },
    {
      title: "Specialized Programs",
      fact: "Only 18% of universities have specialized programs for disabled students.",
      description: "Programs that specifically support disabled students, like assistive technology and custom learning plans, are rare but essential for their education.",
      icon: <FaChartLine className="text-4xl text-orange-500" />
    },
    {
      title: "Employment Challenges",
      fact: "Approximately 85% of disabled individuals are unemployed due to lack of accessible education and job opportunities.",
      description: "Education plays a key role in helping disabled individuals gain the skills and knowledge needed for employment, but limited access to proper institutions hinders their success.",
      icon: <FaUsers className="text-4xl text-purple-500" />
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div id="facts" className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">Educational Facts & Statistics</h1>
      <Slider {...settings} className="mx-auto w-4/5 md:w-3/4 lg:w-2/3">
        {factsData.map((fact, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="mb-4">{fact.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{fact.title}</h2>
            <p className="text-xl text-gray-700 mb-2">{fact.fact}</p>
            <p className="text-gray-600">{fact.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Facts;
