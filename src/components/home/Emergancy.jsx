import React from "react";

const Emergancy = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-[70vh] py-10 px-6 lg:px-20 gap-10">
      
      {/* Left Side (Content Section) */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
          About <span className="text-blue-600">Dr. Adeeb Rizvi</span>
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra.
        </p>

        {/* Doctor's Signature */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWCvfl_3zvKQJ_Iq5ulGWYoQty7NjUcdWbQ&s"
            alt="Doctor's Signature"
            className="w-40 h-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105"
            href="#offcanvasHealthTips"
          >
            Get Health Tips
          </a>

          <a
            className="px-5 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-transform transform hover:scale-105"
            href="#offcanvasLearnMore"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="w-full lg:w-1/2 h-80 lg:h-[70vh]">
        <img
          src="https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr8-2.jpg"
          alt="Doctor"
          className="w-full h-full object-fit rounded-xl shadow-lg"
        />
      </div>
      
    </div>
  );
};

export default Emergancy;
