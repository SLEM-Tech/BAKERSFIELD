"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "@src/components/Reusables/Carousel";
import { TopCategoryCard } from "../TopCategoryCard";
import { useCategories, WooCommerce } from "@src/components/lib/woocommerce";
import { convertToSlug } from "@constants";
import HomeCard from "@src/components/Cards/HomeCard";

export const BookCategories = ({ className = "" }) => {
	const [displayMore, setDisplayMore] = useState(true);
	const sliderRef = useRef<HTMLDivElement>(null);
	const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
	const [maxScrollTotal, setMaxScrollTotal] = useState(0);
	const [isCatLoading, setIsCatLoading] = useState(true);

	const { data: categories, isLoading } = useCategories("");
	const Categories = categories || [];

	const [categoryProductsMap, setCategoryProductsMap] = useState<{
		[key: string]: ProductType[];
	}>({});

	const handleNext = () => {
		if (sliderRef.current) {
			const slider = sliderRef.current;
			const cardWidth = slider.offsetWidth / getItemsPerView();
			slider.scrollLeft += cardWidth * getItemsPerView();
			setScrollLeftTotal(slider.scrollLeft);
			setMaxScrollTotal(slider.scrollWidth - slider.clientWidth);
		}
	};

	const handlePrev = () => {
		if (sliderRef.current) {
			const slider = sliderRef.current;
			const cardWidth = slider.offsetWidth / getItemsPerView();
			slider.scrollLeft -= cardWidth * getItemsPerView();
			setScrollLeftTotal(slider.scrollLeft);
			setMaxScrollTotal(slider.scrollWidth - slider.clientWidth);
		}
	};

	const getItemsPerView = () => {
		if (typeof window === "undefined") return 6;
		if (window.innerWidth < 640) return 2; // xs
		if (window.innerWidth < 768) return 3; // sm
		if (window.innerWidth < 1024) return 4; // md
		if (window.innerWidth < 1280) return 5; // lg
		return 6; // xl and up
	};

	useEffect(() => {
		const fetchCategoryProducts = async () => {
			if (!categories?.length) {
				setIsCatLoading(false);
				return;
			}

			try {
				setIsCatLoading(true);
				const filteredCategories = categories
					.filter((category: CategoryType) => category?.count > 0)
					.slice(0, 5);

				if (filteredCategories.length === 0) {
					setCategoryProductsMap({});
					return;
				}

				const productsPromises = filteredCategories.map(
					async (category: CategoryType) => {
						const response = await WooCommerce.get(
							`products?category=${category?.id}`,
						);

						const firstProductImage =
							response?.data.length > 0
								? response?.data[0]?.images[0]?.src
								: null;

						return {
							categoryId: category?.id,
							firstProductImage,
						};
					},
				);

				const productsResults = await Promise.all(productsPromises);

				const productsMap = productsResults.reduce(
					(acc: any, result: any) => ({
						...acc,
						[result.categoryId]: result.firstProductImage,
					}),
					{},
				);

				setCategoryProductsMap(productsMap);
			} catch (error) {
				console.error("Error fetching category products:", error);
			} finally {
				setIsCatLoading(false);
			}
		};

		fetchCategoryProducts();
	}, [categories]);

	if (isLoading || Categories?.length === 0) {
		return <div className='text-center py-10'>Loading Top categories...</div>;
	}

	return (
		<section
			className={`bg-discovery-gradient lg:pt-4 pb-12 relative overflow-hidden ${className}`}
		>
			<div className='w-full text-[#1A1A1A]'>
				<div className='flex flex-col items-center gap-6'>
					<div className='container flex flex-col items-center text-[#1A1A1A] gap-4 pt-8'>
						<p className='text-lg font-medium'>Our Digital Marketplace</p>
						<h4 className='xs:text-base md:text-2xl lg:text-4xl font-normal xs:text-center md:text-left'>
							Discover premium digital products & resources
						</h4>
					</div>
				</div>

				<p className='relative text-gray-900 xs:mt-5 py-1 font-semibold uppercase text-xs lg:text-base tracking-wide z-10 text-center'>
					Digital Product Categories
				</p>
			</div>

			<div className='relative mt-10 flex items-center justify-center'>
				<div
					className='flex w-full justify-center gap-1 sm:gap-12 overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar'
					ref={sliderRef}
				>
					{Categories?.map((category: CategoryType) => {
						const productImage: any = categoryProductsMap[category?.id]; // Fetch the first product image

						// Only show categories that have a product image
						if (productImage) {
							return (
								<>
									<HomeCard
										key={category?.id}
										id={category?.id.toString()}
										image={productImage} // Use the first product image
										name={category?.name}
									/>
								</>
							);
						}

						return null;
					})}
				</div>

				{/* <div
          className="mt-2 text-xs text-right cursor-pointer text-[#7fc561] hover:underline pr-6"
          onClick={() => setDisplayMore(!displayMore)}
        >
          {displayMore ? "Show Less" : "Show More"}
        </div> */}
			</div>
		</section>
	);
};

export default BookCategories;
