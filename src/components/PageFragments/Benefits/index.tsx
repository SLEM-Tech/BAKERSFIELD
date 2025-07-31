import React, { useRef, useState } from "react";
import { StaticImageData } from "@node_modules/next/image";
import charity from "@public/images/bookstore/charity.png";
import pill from "@public/images/bookstore/pill.png";
import atom from "@public/images/bookstore/atom.png";
import eco from "@public/images/bookstore/eco-friendly.png";
import Carousel from "@src/components/Reusables/Carousel";
import BenefitCard from "../BenefitCard";

interface BenefitCardProps {
  image: StaticImageData;
  text: string;
}

const BenefitList: BenefitCardProps[] = [
  {
    image: charity,
    text: "Crafted with care to support your unique health needs.",
  },
  {
    image: eco,
    text: "100% vegan and cruelty-free supplements for a healthier you",
  },
  {
    image: atom,
    text: "Science-backed supplements for optimal health and wellness.",
  },
  {
    image: pill,
    text: "Experience the difference with our next-level supplements",
  },
  {
    image: eco,
    text: "100% vegan and cruelty-free supplements for a healthier you",
  },
];

const Loader = () => (
  <>
    {[...Array(6)].map((_, idx) => (
      <div
        key={idx}
        className="min-w-[240px] sm:min-w-[280px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0"
      />
    ))}
  </>
);

const Benefits = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxScrollTotal, setMaxScrollTotal] = useState(0);
  const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollLeftTotal(scrollLeft);
      setMaxScrollTotal(maxScroll);

      sliderRef.current.scrollLeft += 600;
      setCurrentIndex((prevIndex) =>
        prevIndex < BenefitList.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollLeftTotal(scrollLeft);
      setMaxScrollTotal(maxScroll);

      if (scrollLeft > 0) {
        sliderRef.current.scrollLeft -= 600;
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      }
    }
  };

  return (
    <div className="text-4xl font-normal">
      <div className="container flex flex-col items-center text-[#1A1A1A] gap-4 pt-8">
        <h4 className="mb-8 xs:text-2xl md:text-4xl xs:text-center md:text-pretty">Treat yourself, because you deserve it.</h4>
      </div>
      <div className="w-full">
        <Carousel
          totalDataNumber={BenefitList.length}
          maxScrollTotal={maxScrollTotal}
          scrollLeftTotal={scrollLeftTotal}
          handleNext={handleNext}
          handlePrev={handlePrev}
        >
          <div
            ref={sliderRef}
            className="w-full flex space-x-6 overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar px-4 sm:px-8"
          >
            {isLoading ? (
              <Loader />
            ) : (
              BenefitList.map(({ image, text }, index) => (
                <div
                  key={index}
                  className="min-w-[240px] sm:min-w-[280px] max-w-[300px] shrink-0"
                >
                  <BenefitCard image={image} text={text} />
                </div>
              ))
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Benefits;
