"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import join2 from "@public/images/join-img1.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Quotes = {
  label: string;
};

const quoteList: Quotes[] = [
  {
    label:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    label:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    label:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    label:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];

const Join: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = quoteList.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 15000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="bg-[#F6F6D23D] py-12">
      <div className="w-full px-4 md:px-20">
        <Image src={join2} alt="Join banner" className="w-full h-auto" />
      </div>

      <div className="mt-20 px-4 text-center">
        <Carousel
          selectedItem={currentSlide}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          autoPlay={false}
          onChange={(index) => {
            setCurrentSlide(index);
            resetInterval();
          }}
        >
          {quoteList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4"
            >
              <h5 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
                Wise Quotes
              </h5>
              <p className="font-poppins text-center text-base sm:text-lg lg:text-xl max-w-xl text-gray-700">
                “{item.label}”
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Join;
