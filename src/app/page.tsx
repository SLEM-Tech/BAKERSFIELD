import AppLayout from "@src/components/AppLayout";
import JoinUs from "@src/components/PageFragments/JoinUs";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import HeroSection from "@src/components/PageFragments/HeroSection";
import BookStore from "@src/components/PageFragments/BookStore";
import TestimonialSection from "@src/components/PageFragments/TestimonialSection";
import FaqSection from "@src/components/PageFragments/FaqSection";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Bakersfield Elementary Services Limited",
    template: "",
  },
  description: description,
  icons: SEODATA.defaultOGImage,
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
      <main className="flex flex-col gap-5">
        <div className="mt-[120px]">
          <HeroSection />
        </div>
        <div>
          <BookStore />
        </div>
        <div>
          <TestimonialSection />
        </div>
        <div className="my-8">
          <JoinUs />
        </div>
        <div>
          <FaqSection />
        </div>
      </main>
    </AppLayout>
  );
};

export default page;
