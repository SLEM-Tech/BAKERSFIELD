"use client";

import React, { useRef, useState } from "react";
import Carousel from "@src/components/Reusables/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BookCard from "../BookStoreCard";
import { StaticImageData } from "next/image";
import img1 from "@public/images/bookstore/img1.png";

import { convertToSlug } from "@constants";
import Benefits from "../Benefits";

interface BookCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string | StaticImageData;
}

const sampleBooks: BookCardProps[] = [
  {
    title: "Book 3",
    description: "Lorem ipsum dolor sit amet",
    price: "NGN12,000.00",
    imageUrl: img1,
  },
  {
    title: "Book 3",
    description: "Lorem ipsum dolor sit amet",
    price: "NGN12,000.00",
    imageUrl: img1,
  },
  {
    title: "Book 3",
    description: "Lorem ipsum dolor sit amet",
    price: "NGN12,000.00",
    imageUrl: img1,
  },
  {
    title: "Book 3",
    description: "Lorem ipsum dolor sit amet",
    price: "NGN12,000.00",
    imageUrl: img1,
  },
  {
    title: "Book 3",
    description: "Lorem ipsum dolor sit amet",
    price: "NGN12,000.00",
    imageUrl: img1,
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

const DiscoverySection = () => {
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
        prevIndex < sampleBooks.length - 1 ? prevIndex + 1 : prevIndex
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
    <section className="px-4 w-full overflow-hidden">
      <div className="w-full">
        <Carousel
          totalDataNumber={sampleBooks.length}
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
              sampleBooks.map(
                ({ title, description, price, imageUrl }, index) => (
                  <div
                    key={index}
                    className="min-w-[240px] sm:min-w-[280px] max-w-[300px] shrink-0"
                  >
                    <BookCard
                      title={title}
                      description={description}
                      price={price}
                      imageUrl={imageUrl}
                    />
                  </div>
                )
              )
            )}
          </div>
        </Carousel>
      </div>

      <div className="mt-12 bg-[#fdfdf4]">
        <Benefits />
      </div>
    </section>
  );
};

export default DiscoverySection;

