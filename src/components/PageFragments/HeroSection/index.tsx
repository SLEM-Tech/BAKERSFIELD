import React from "react";
import Image from "next/image";
import { FaRegComments, FaRegStar } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import img2 from "@public/images/hero-section/new.jpg";
import img3 from "@public/images/hero-section/new-2.jpg";
import Link from "next/link";

const Hero = () => {
	const DIGITAL_GOODS_FEATURES = [
		{
			id: 1,
			icon: FaRegComments,
			iconSize: 40,
			title: "Instant Digital Delivery",
			description:
				"Get immediate access to your digital products after purchase.",
			color: "#4b5563",
		},
		{
			id: 2,
			icon: FiGift,
			iconSize: 30,
			title: "Lifetime Access & Updates",
			description:
				"One-time purchase with free lifetime updates and future enhancements.",
			color: "#4b5563",
		},
		{
			id: 3,
			icon: FaRegStar,
			iconSize: 40,
			title: "Premium Digital Quality",
			description:
				"High-quality digital products optimized for all devices and platforms.",
			color: "#4b5563",
		},
	];

	return (
		<section className='w-full'>
			{/* Top Section */}
			<div className='grid grid-cols-1 md:grid-cols-3 h-[512px]'>
				{/* Left Panel */}
				<div className='bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col justify-center px-10'>
					<h1 className='text-3xl md:text-4xl font-serif font-medium text-black leading-snug'>
						The home of digital Products
					</h1>
					<Link
						href='/category'
						className='mt-8 bg-black text-yellow-100 px-6 py-2 rounded-md w-fit text-sm hover:bg-gray-900 transition'
					>
						Discover all
					</Link>
				</div>

				{/* Middle Panel */}
				<div className='relative'>
					<Image
						src={img3}
						alt='Books with plant'
						fill
						className='object-cover'
					/>
				</div>

				{/* Right Panel */}
				<div className='relative'>
					<Image
						src={img2}
						alt='Open book with scenery'
						fill
						className='object-cover'
					/>
				</div>
			</div>

			{/* Bottom Info Section */}
			<div className='grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
				{DIGITAL_GOODS_FEATURES.map((feature) => {
					const IconComponent = feature.icon;
					return (
						<div key={feature.id} className='flex gap-4 p-6 items-start'>
							<IconComponent size={feature.iconSize} color={feature.color} />
							<div>
								<h4 className='font-semibold text-gray-800 mb-1'>
									{feature.title}
								</h4>
								<p className='text-sm text-gray-600'>{feature.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Hero;
