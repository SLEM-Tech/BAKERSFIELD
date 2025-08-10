import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  totalDataNumber: number;
  maxScrollTotal?: number;
  scrollLeftTotal?: number;
  children: React.ReactNode;
  handlePrev: () => void;
  handleNext: () => void;
  // sliderRef: React.RefObject<HTMLDivElement>;
}

const Carousel = ({
  totalDataNumber,
  maxScrollTotal,
  scrollLeftTotal,
  children,
  handlePrev,
  handleNext,
}: CarouselProps) => {
  return (
    <div className="relative w-full overflow-x-hidden">
      {totalDataNumber > 3 && (
        <div className="hidden sm:flex w-full sm:w-16 justify-between bg-white px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg absolute top-[px] right-2 drop-shadow-sm z-20">
          <BiSolidLeftArrow
            onClick={handlePrev}
            className={`text-xl cursor-pointer hover:scale-105 transition text-primary ${
              scrollLeftTotal! >= 5 ? "text-gray-500" : "text-primary"
            }`}
          />
          <BiSolidRightArrow
            onClick={handleNext}
            className={`text-xl cursor-pointer hover:scale-105 transition text-primary ${
              scrollLeftTotal! >= maxScrollTotal!
                ? "text-gray-500"
                : "text-primary"
            }`}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Carousel;
