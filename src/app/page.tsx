import AppLayout from "@src/components/AppLayout";
import JoinUs from "@src/components/PageFragments/JoinUs";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import HeroSection from "@src/components/PageFragments/HeroSection";
import BookStore from "@src/components/PageFragments/BookStore";
import TestimonialSection from "@src/components/PageFragments/TestimonialSection";
import FaqSection from "@src/components/PageFragments/FaqSection";
import BookCategories from "@src/components/PageFragments/BookStore3";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
	title: {
		absolute: "Bakersfield Elementary Services Limited",
		default: "Bakersfield Elementary Services Limited",
		template: "",
	},
	description: description,
	icons: {
		icon: "/favicon.png", // or "/favicon.ico"
	},
	openGraph: {
		images: [
			{
				url: SEODATA.defaultOGImage,
			},
		],
	},
};

const page = () => {
	return (
		<AppLayout>
			<main className='flex flex-col gap-5'>
				<div className='xs:mt-[110px] md:mt-[100px]'>
					<HeroSection />
				</div>
				<div>
					<BookCategories />
				</div>
				<div>
					<BookStore />
				</div>
				<div className=''>
					<JoinUs />
				</div>
				<div>
					<TestimonialSection />
				</div>
			</main>
		</AppLayout>
	);
};

export default page;
