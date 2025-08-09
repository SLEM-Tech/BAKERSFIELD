"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { RiShoppingBagFill } from "react-icons/ri";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import Image from "next/image";

interface ProductCard2Props {
  id: string | number;
  image: string;
  oldAmount?: string;
  newAmount: string;
  description: string;
  boxShadow?: boolean;
  title: string;
  author?: string;
}

const ProductCard2 = ({
  id,
  image,
  oldAmount,
  newAmount,
  description,
  boxShadow,
  title,
  author,
}: ProductCard2Props) => {
  const router = useRouter();
  const { addItem, removeItem, updateItem, getItem } = useCart();
  const [count, setCount] = useState(0);
  const ID = id.toString();
  const cartItem = getItem(ID);
  const cartItemCount = cartItem ? cartItem.quantity : 0;
  const NewAmount = parseInt(newAmount);
  // const OldAmount = parseInt(oldAmount)
  // const handleClick = () => {
  // 	router.push(`/home-item/product/${description}-${id}`);
  // };

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(count + 1);
    // Adding the first product from the `products` array to the cart
    addItem({
      id: ID,
      name: description,
      price: NewAmount,
      quantity: count,
      image: image,
    });
  };

  const handleMinusCartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the event from propagating further

    const newCount = Math.max(count - 1, 0);

    if (newCount === 0) {
      // If count becomes 0, remove the item from the cart
      removeItem(ID);
    } else {
      // Update the cart item with the new quantity
      updateItem(ID, {
        quantity: newCount,
      });
    }

    setCount(newCount);
  };

  const handlePlusCartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the event from propagating further

    const newCount = count + 1;

    // Adding the product to the cart with the updated quantity
    addItem({
      id: ID,
      name: description,
      price: NewAmount,
      quantity: newCount,
      image: image,
    });

    setCount(newCount);
  };

  const slugDesc = convertToSlug(description);
  const route = useRouter();

  return (
    <div
      className={`w-full max-w-xs p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center ${
        boxShadow ? "border border-gray-200" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title and Author */}
      <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-2">{author || "Author"}</p>

      {/* Price */}
      <p className="text-base font-medium text-black mb-4">
        ₦{NewAmount.toLocaleString()}
      </p>

      {/* Add to Cart */}
      <button
        onClick={(e) => {
          handleCartClick(e);
          route.push(`/home-item/product/${slugDesc}-${id}`);
        }}
        className="w-full flex items-center justify-around gap-2 bg-[#EFFC94] text-black px-4 py-2 rounded-md border border-black text-sm font-semibold shadow hover:shadow-lg transition"
      >
        Add to cart
        <RiShoppingBagFill />
      </button>
    </div>
  );
};

export default ProductCard2;
