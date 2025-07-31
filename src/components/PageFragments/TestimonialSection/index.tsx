// components/Testimonial.tsx

import img from "@public/images/testimonial-section/test-img1.png"; 
import TestimonialCard from "../TestimonialCard";

const testimonials = [
  {
    name: "Anna Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi id enim pulvinar suscipit. Praesent pretium orci non velit bibendum.",
    rating: 3,
    image: img,
    bgColor: "bg-[#F4F7D6]",
  },
  {
    name: "Sara Jacob",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi id enim pulvinar suscipit. Praesent pretium orci non velit bibendum.",
    rating: 2,
    image: img,
    bgColor: "bg-[#EAEAFE]",
  },
  {
    name: "Lara Zoe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi id enim pulvinar suscipit. Praesent pretium orci non velit bibendum.",
    rating: 3,
    image: img,
    bgColor: "bg-[#FFF2E8]",
  },
  {
    name: "Franklin Jackson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi id enim pulvinar suscipit. Praesent pretium orci non velit bibendum.",
    rating: 1,
    image: img,
    bgColor: "bg-[#FFF1EA]",
  },
  {
    name: "Jane Klien",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi id enim pulvinar suscipit. Praesent pretium orci non velit bibendum.",
    rating: 4,
    image: img,
    bgColor: "bg-[#F4F7D6]",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <h5 className="uppercase tracking-widest text-sm mb-3 text-gray-600">
        Testimonials
      </h5>
      <h2 className="text-3xl md:text-4xl font-medium mb-16">
        Real people, real results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {/* Top row */}
        <TestimonialCard {...testimonials[0]} />
        <TestimonialCard {...testimonials[1]} />
        <TestimonialCard {...testimonials[2]} />
      </div>
        {/* Bottom row */}
        <div className="flex xs:flex-col md:flex-row justify-center gap-10 items-center w-full mt-8">
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
    </section>
  );
};

export default Testimonial;
