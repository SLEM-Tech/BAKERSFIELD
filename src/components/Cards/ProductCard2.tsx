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

	const slugDesc = convertToSlug(description);

	const handleCartClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCount(count + 1);
		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: 1, // Changed from count to 1 for better UX
			image: image,
		});
	};

	return (
		<div
			className={`
        w-full p-3 sm:p-4 rounded-xl bg-white 
        shadow-sm hover:shadow-lg transition-all duration-300 
        flex flex-col items-center text-center
        border border-gray-100 hover:border-gray-200
        ${boxShadow ? "shadow-md" : ""}
      `}
		>
			{/* Image Container */}
			<div
				className='w-full mb-3 sm:mb-4 rounded-lg overflow-hidden cursor-pointer'
				onClick={() => router.push(`/home-item/product/${slugDesc}-${id}`)}
			>
				<div className='aspect-[3/4] xs:aspect-[4/5] sm:aspect-[3/4] relative'>
					<Image
						src={image || "/placeholder-product.jpg"}
						alt={title}
						fill
						sizes='(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw'
						className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
						placeholder='blur'
						blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faHL6nsqUWCmW4raykqL2rYebUQcVyk//2Q=='
					/>
				</div>
			</div>

			{/* Content */}
			<div className='w-full flex flex-col flex-grow'>
				{/* Title */}
				<h3
					className='text-sm xs:text-base sm:text-lg font-medium text-gray-900 line-clamp-2 mb-1 sm:mb-2 leading-tight cursor-pointer hover:text-blue-600 transition-colors'
					onClick={() => router.push(`/home-item/product/${slugDesc}-${id}`)}
				>
					{title}
				</h3>

				{/* Author - Optional */}
				{author && (
					<p className='text-xs xs:text-sm text-gray-500 mb-2 sm:mb-3 line-clamp-1'>
						{author}
					</p>
				)}

				{/* Price */}
				<div className='mt-auto'>
					<p className='text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4'>
						{NewAmount ? <FormatMoney2 value={NewAmount} /> : "Out of Stock"}
					</p>

					{/* Add to Cart Button */}
					<button
						onClick={handleCartClick}
						className='
              w-full flex items-center justify-center gap-2 
              bg-[#EFFC94] hover:bg-[#e5f283] text-gray-900 
              px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
              border border-gray-300 text-xs sm:text-sm font-semibold 
              shadow-sm hover:shadow-md transition-all duration-200
              active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
            '
						disabled={!NewAmount}
					>
						<span className='truncate'>Add to cart</span>
						<RiShoppingBagFill className='flex-shrink-0 text-sm sm:text-base' />
					</button>

					{/* Cart Quantity Indicator */}
					{cartItemCount > 0 && (
						<div className='mt-2 flex items-center justify-center space-x-2'>
							<button
								onClick={(e) => {
									e.stopPropagation();
									const newCount = Math.max(cartItemCount - 1, 0);
									if (newCount === 0) {
										removeItem(ID);
									} else {
										updateItem(ID, { quantity: newCount });
									}
								}}
								className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors'
							>
								<AiOutlineMinus className='text-xs sm:text-sm' />
							</button>

							<span className='text-sm font-medium min-w-[20px]'>
								{cartItemCount}
							</span>

							<button
								onClick={(e) => {
									e.stopPropagation();
									updateItem(ID, { quantity: cartItemCount + 1 });
								}}
								className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors'
							>
								<AiOutlinePlus className='text-xs sm:text-sm' />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard2;
