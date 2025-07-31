"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "@node_modules/next/image";
import join from "@public/images/testimonial-section/test-img1.png";
import join2 from "@public/images/join-img1.png";
import { Carousel } from "react-responsive-carousel";

type Quotes = {
  label: string;
};

const quoteList: Quotes[] = [
  {
    label:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    label:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    label:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    label:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const Join: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<Carousel | null>(null);

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextIndex = (prevSlide + 1) % 6; // Cycle through slides
      carouselRef.current?.moveTo(nextIndex);
      return nextIndex;
    });
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      changeSlide();
    }, 15000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <section className="bg-[#F6F6D23D] py-12">
      <div className="w-full p-20">
        <Image src={join2} alt="join"  />
      </div>

      <div className="lg:mt-[70px]">
        <Carousel
          ref={carouselRef}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={false}
          showIndicators={false}
          autoPlay={false}
          selectedItem={currentSlide}
          onChange={(index) => {
            setCurrentSlide(index);
            resetInterval();
          }}
          interval={15000}
        >
          {quoteList.map((item, index) => (
            <div key={index} className="w-full flex items-center flex-col">
              <h5 className="font-extrabold text-4xl">
                Wise Quotes <br /> “
              </h5>
              <p className="font-poppins w-full text-center font-normal text-xl max-w-[600px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Join;
