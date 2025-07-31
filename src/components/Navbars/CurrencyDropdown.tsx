// components/CurrencyDropdown.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import ng from "@public/images/flags/ng.png"
import us from "@public/images/flags/us.png"

const currencies = [
  { label: "NGN", flag: ng },
  { label: "USD", flag: us },
];

export default function CurrencyDropdown() {
  const [selected, setSelected] = useState(currencies[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 bg-neutral-900 text-white px-1.5 py-1 rounded-md text-xs"
      >
        <Image
          src={selected.flag}
          alt={selected.label}
          width={20}
          height={14}
        />
        <FaChevronDown className="text-xs" />
        <span>{selected.label}</span>
      </button>

      {/* Dropdown List */}
      {open && (
        <ul className="absolute mt-2 w-full bg-white shadow-md rounded-md z-10">
          {currencies.map((currency) => (
            <li
              key={currency.label}
              onClick={() => {
                setSelected(currency);
                setOpen(false);
              }}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm",
                selected.label === currency.label && "bg-gray-100"
              )}
            >
              <Image
                src={currency.flag}
                alt={currency.label}
                width={20}
                height={14}
              />
              <span>{currency.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
