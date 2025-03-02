import React from "react";
import Person from "../../assets/backgrounds/hero-person.png";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="flex align-center justify-center pt-6">
      <main
        className="flex flex-col 
            items-center justify-center 
            pt-20 px-6 lg:flex-row 
            lg:items-center lg:justify-between
            lg:space-x-12"
      >
        <div
          className="lg:max-w-xl
                lg:flex-1 lg:text-left text-center "
        >
          <h1
            className="text-bold 
                    text-4xl font-extrabold 
                    text-center lg:text-left
                    leading-tight mb-6"
          >
            Welcome to
            <br />
            <span
              className="
                        text-yellow-600"
            >
              CyberWattSolutions
            </span>
          </h1>
          <p
            className="text-gray-200 
                    text-lg font-medium text-center
                    lg:text-left leading-relaxed mb-6"
          >
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <Link to="/contact"
            className="bg-yellow-600 
                    text-white text-lg font-semibold 
                    py-3 px-6 rounded-full shadow-md
                    hover:bg-orange-600 transition-colors md:align-center"
          >
            Contact Us
          </Link>
        </div>

        <div
          className="relative w-full max-w-sm
                lg:w-1/2 lg:max-w-md lg:h-96 mt-8 lg:mt-0"
        >
          <div
            className="absolute inset-0 
                    bg-yellow-600 rounded-full"
          ></div>
          <img
            className="relative w-full h-full 
                        object-contain rounded-full border-2
                        border-white"
            src={Person}
            alt="Placeholder"
          />
        </div>
      </main>
    </div>
  );
};

export default HomeHero;
