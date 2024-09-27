import React from "react";

const faqs = () => {
  let faq = [
    {
      question: "How do I sign up?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora totam earum beatae quasi.",
    },
    {
      question:
        "What information do I need to provide during the sign-up process?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora totam earum beatae quasi.",
    },
    {
      question: "Is my information secure during the sign-up process?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora totam earum beatae quasi.",
    },
    {
      question: "Who can apply?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora totam earum beatae quasi.",
    },
    {
      question: "What are the terms and conditions for the collaboration?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora totam earum beatae quasi.",
    },
    {
      question: "What is the minimum duration of the contract?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora totam earum beatae quasi.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h2 className="text-4xl lg:text-[52px] font-medium lg:leading-[54px]">
          Frequently asked questions
        </h2>
        <div>
          {faq.map((data, index) => (
            <details class="border-b py-6" key={index}>
              <summary className="text-lg flex items-center">
                <span>{data.question}</span>
              </summary>
              <p className="text-lg mt-4 ps-4">{data.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
};

export default faqs;
