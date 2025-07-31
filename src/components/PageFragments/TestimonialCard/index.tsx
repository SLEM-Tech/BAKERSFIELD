// components/TestimonialCard.tsx
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { MdOutlineStar } from "react-icons/md";

interface TestimonialCardProps {
  rating: number;
  text: string;
  name: string;
  image: StaticImageData;
  bgColor?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  rating,
  text,
  name,
  image,
  bgColor = "bg-[#F8F8F8]",
}) => {
  return (
    <div className={`relative p-6 rounded-2xl shadow-sm ${bgColor} max-w-sm`}>
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <MdOutlineStar
            key={i}
            size={18}
            fill={i < rating ? "black" : "#cccccc"}
            stroke="black"
            className="mr-1"
          />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">{text}</p>

      {/* Name */}
      <p className="font-semibold text-sm text-black">~ {name}</p>

      {/* Profile photo */}
      <div className="absolute -top-6 right-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
        <Image src={image} alt={name} width={48} height={48} />
      </div>
    </div>
  );
};

export default TestimonialCard;
