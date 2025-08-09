"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AppLayout from "@src/components/AppLayout";
import DeliveryReturn from "./_component/DeliveryReturn";
import RefundPolicy from "./_component/RefundPolicy";
import PrivacyPolicy from "./_component/PrivacyPolicy";
import TermsOfUse from "./_component/TermsOfUse";

// BAKERSFIELD ELEMENTARY SERVICES LIMITED - Digital Goods—audiovisual Media Including Books, Movies
const BakersfieldElementaryPolicies = () => {
  const searchParams = useSearchParams().toString();
  const search = searchParams.replace(/=$/, "");
  const [activeTab, setActiveTab] = useState<string>("termsOfUse");

  useEffect(() => {
    if (search === "terms-of-use") {
      setActiveTab("termsOfUse");
    } else if (search === "privacy-policy") {
      setActiveTab("privacyPolicy");
    } else if (search === "delivery-return") {
      setActiveTab("deliveryReturn");
    } else if (search === "refund-policy") {
      setActiveTab("refundPolicy");
    }
  }, [search]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <AppLayout>
      <main className="bg-white mx-auto mt-32 pb-24">
        <section className="flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center">
          <h4 className="text-black text-base sm:text-xl font-semibold leading-[120%]">
            Our Policies
          </h4>
          <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]">
            Bakersfield Elementary Services Limited Policies
          </h3>
          <span className="text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl">
            At Bakersfield Elementary Services Limited, we provide premium
            digital content including audiovisual media, books, and movies while
            ensuring secure transactions and protecting your digital rights.
          </span>
          <div className="flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition">
            <button
              className={`px-2 xl:px-4 py-2 rounded-md ${
                activeTab === "termsOfUse"
                  ? "bg-white text-black"
                  : "bg-[#F5F5F5] text-[#667085]"
              }`}
              onClick={() => handleTabClick("termsOfUse")}
            >
              Terms of use
            </button>
            <button
              className={`px-2 xl:px-4 py-2 rounded-md ${
                activeTab === "privacyPolicy"
                  ? "bg-white text-black"
                  : "bg-[#F5F5F5] text-[#667085]"
              }`}
              onClick={() => handleTabClick("privacyPolicy")}
            >
              Privacy Policy
            </button>
            <button
              className={`px-2 xl:px-4 py-2 rounded-md ${
                activeTab === "deliveryReturn"
                  ? "bg-white text-black"
                  : "bg-[#F5F5F5] text-[#667085]"
              }`}
              onClick={() => handleTabClick("deliveryReturn")}
            >
              Delivery & Return
            </button>
            <button
              className={`px-2 xl:px-4 py-2 rounded-md ${
                activeTab === "refundPolicy"
                  ? "bg-white text-black"
                  : "bg-[#F5F5F5] text-[#667085]"
              }`}
              onClick={() => handleTabClick("refundPolicy")}
            >
              Refund Policy
            </button>
          </div>
        </section>

        <div className="flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20">
          {activeTab === "termsOfUse" && <TermsOfUse />}

          {activeTab === "privacyPolicy" && <PrivacyPolicy />}

          {activeTab === "deliveryReturn" && <DeliveryReturn />}

          {activeTab === "refundPolicy" && <RefundPolicy />}
        </div>
      </main>
    </AppLayout>
  );
};

export default BakersfieldElementaryPolicies;
