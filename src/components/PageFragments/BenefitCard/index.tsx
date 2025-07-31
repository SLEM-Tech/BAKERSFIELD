import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface BenefitCardProps {
  image: StaticImageData;
  text: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ image, text }) => {
  return (
    <div className="flex items-start gap-4 p-8 shadow-sm rounded-xl bg-[#FCFCFC] text-[#1A1A1A] max-w-xs">
      <div className="text-2xl text-black mt-1">
        <Image
          src={image}
          alt="Benefit image"
        />
      </div>
      <p
        className="text-md leading-snug"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default BenefitCard;
