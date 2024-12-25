import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a range of services including web development, UI/UX design, and digital marketing tailored to your business needs.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can contact our support team via email at support@example.com or call us at +1-800-555-1234.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee on all our services. Please contact us for more details.',
  },
  {
    question: 'Do you provide custom solutions?',
    answer:
      'Yes, we specialize in creating custom solutions that align with your specific business requirements.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-gray-700 font-semibold hover:bg-blue-500 hover:text-white transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 border-t border-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
