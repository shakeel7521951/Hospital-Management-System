import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const carouselData = [
  {
    text: "Neurology",
    description:
      "A wide range of diagnostic, therapeutic, and management options for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/neurologist-2.jpg",
  },
  {
    text: "Bills And Insurance",
    description:
      "Comprehensive billing and insurance assistance to ensure seamless financial transactions and support for patients.",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cardiac-2.jpg",
  },
  {
    text: "Cardiac Surgery",
    description:
      "Cardiac surgery encompasses a range of surgical procedures aimed at treating conditions of the heart and its surrounding blood vessels.",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/service1-2048x930-1-1200x675.jpg",
  },
  {
    text: "Cancer Screening",
    description:
      "Early detection of cancer through advanced screening technologies, ensuring timely diagnosis and treatment.",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cancer-screening-2048x1365-1-1200x675.jpg",
  },
  {
    text: "Heart Specialists",
    description:
      "Expert heart specialists providing personalized care and treatment for cardiovascular diseases and conditions.",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/2-2-360x225.jpg",
  },
];

const FlickityCarousel = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity(".carousel", {
      cellAlign: "center",
      contain: true, 
      wrapAround: true,
      autoPlay: 3000,
      pageDots: false,
      prevNextButtons: true,
      groupCells: 1,
      adaptiveHeight: true,
    });

    return () => flickityRef.current.destroy();
  }, []);

  return (
    <div className="carousel w-full overflow-hidden mx-auto" data-flickity>
      {carouselData.map((item, index) => (
        <div
          key={index}
          className="carousel-cell w-full h-96 flex items-center justify-center bg-cover bg-center rounded-xl shadow-lg mx-2"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="bg-[#000000a3] bg-opacity-50 p-6 rounded-xl text-white text-center w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-2">{item.text}</h2>
            <p className="text-sm mb-4">{item.description}</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-80 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlickityCarousel;