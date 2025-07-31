'use Client'

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { convertToSlug } from "@constants";


interface BookCardProps {
  id?:number
  title: string;
  description: string;
  price: string;
  imageUrl: string | StaticImageData;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  description,
  price,
  imageUrl,
}) => {
  const route = useRouter();
  const slugDesc = convertToSlug(title);
  return (
    <div className="w-full max-w-[280px] p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-[#f9f9ff] shadow-md flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="w-[160px] h-[160px] rounded-full overflow-hidden mb-6">
        <Image
          src={imageUrl}
          alt={title}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>

      <button
        type="button"
        onClick={() => route.push(`./home-item/product/${slugDesc}-${id}`)}
        className="bg-[#EFFC94] text-black px-4 py-2 rounded-lg border border-black text-sm font-medium shadow-md hover:shadow-lg transition"
      >
        Add to cart - {price}
      </button>
    </div>
  );
};

export default BookCard;
