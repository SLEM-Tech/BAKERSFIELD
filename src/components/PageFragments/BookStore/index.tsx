"use client";

import React, { useState } from "react";
import BookStore1 from "@src/components/PageFragments/BookStore1";
import BookStore2 from "@src/components/PageFragments/BookStore2";
import BookStore3 from "@src/components/PageFragments/BookStore3";

const storeData = [
  {
    key: "store1",
    title: "Lorem ipsum",
    description: "Discover book1",
    component: <BookStore1 />,
  },
  {
    key: "store2",
    title: "Lorem ipsum",
    description: "Discover book2",
    component: <BookStore2 />,
  },
  {
    key: "store3",
    title: "Lorem ipsum",
    description: "Discover book3",
    component: <BookStore3 />,
  },
] as const;

type StoreKey = (typeof storeData)[number]["key"];

const BookstoreTabs = () => {
  const [activeStore, setActiveStore] = useState<StoreKey>("store1");

  const renderActiveComponent = () => {
    const active = storeData.find((item) => item.key === activeStore);
    return active?.component || null;
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center gap-6">
      <div className="container flex flex-col items-center text-[#1A1A1A] gap-4 pt-8">
        <p className="text-lg font-medium">Our Bookstore</p>
        <h4 className="xs:text-2xl md:text-2xl lg:text-4xl font-normal xs:text-center md:text-left">
          Discover knowledge in form of books
        </h4>
      </div>

      <div className="flex justify-between md:gap-10 xs:px-4 xs:gap-5">
        {storeData.map(({ key, title, description }) => (
          <div
            key={key}
            onClick={() => setActiveStore(key)}
            className={`cursor-pointer flex flex-col text-[#000000] px-8 py-4 ${
              activeStore === key ? "border-b-2 border-black" : ""
            }`}
          >
            <p className="font-normal text-center text-large">{title}</p>
            <p className="text-xs text-center">{description}</p>
          </div>
        ))}
      </div>
      <hr className="text-gray-400" />
      <div className="w-full">{renderActiveComponent()}</div>
    </div>
  );
};

export default BookstoreTabs;
