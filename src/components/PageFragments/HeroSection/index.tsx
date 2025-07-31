
import React from "react";
import Image from "next/image";
import { FaRegComments, FaRegStar } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import img2 from "@public/images/hero-section/hero-img2.png";
import img3 from "@public/images/hero-section/hero-img3.png";

const Hero = () => {
  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[512px]">
        {/* Left Panel */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col justify-center px-10">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-black leading-snug">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <button className="mt-8 bg-black text-yellow-100 px-6 py-2 rounded-md w-fit text-sm hover:bg-gray-900 transition">
            Discover all
          </button>
        </div>

        {/* Middle Panel */}
        <div className="relative">
          <Image
            src={img2}
            alt="Books with plant"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Panel */}
        <div className="relative">
          <Image
            src={img3}
            alt="Open book with scenery"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {/* Item 1 */}
        <div className="flex gap-4 p-6 items-start">
          <FaRegComments size={40} color="#4b5563" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Lorem ipsum dolor sit amet
            </h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Sit placerat dignissim
              placerat quis ac viverra.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4 p-6 items-start">
          <FiGift size={30} color="#4b5563" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Customized Recommendations
            </h4>
            <p className="text-sm text-gray-600">
              Find your perfect book based on your unique needs and goals!
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4 p-6 items-start">
          <FaRegStar size={40} color="#4b5563" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Building Habits
            </h4>
            <p className="text-sm text-gray-600">
              Embark on your path to better knowledge with expert guidance every
              step of the way
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
