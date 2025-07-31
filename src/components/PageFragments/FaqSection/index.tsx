import React from "react";
import FaqItem from "../FaqItem";


const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Quis.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum amet adipiscing pharetra commodo fusce sed vitae malesuada. Et facilisis gravida quis urna platea dignissim. Velit porttitor aenean etiam auctor convallis ac. Maecenas sed eget euismod est morbi ultrices maecenas. Odio sem eget in euismod suspendisse justo phasellus ultrices dolor. Felis tellus fermentum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Purus non.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet  Lorem ipsum dolor",
    answer: "",
  },
];

const FaqSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h4 className="uppercase text-sm tracking-widest text-gray-700 mb-2">
        #All The Help You Need
      </h4>
      <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-12">
        We know you are curious!
      </h2>

      <div className="text-left divide-y divide-gray-200">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
