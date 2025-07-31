"use client";
import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <span className="text-2xl text-gray-700">
          {isOpen ? <FiX /> : <FiPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 pr-6 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
