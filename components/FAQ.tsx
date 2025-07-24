import React, { useState } from 'react';

const faqData = [
  {
    question: "How are the readers on SoulSeer vetted?",
    answer: "Every reader on our platform undergoes a rigorous vetting process. This includes a review of their experience, a test reading to assess their ethical approach and intuitive abilities, and a commitment to our code of conduct. We prioritize authenticity and integrity above all else."
  },
  {
    question: "Is my session private and confidential?",
    answer: "Absolutely. Your privacy is paramount. All communications on SoulSeer, including chats, calls, and video sessions, are end-to-end encrypted. We will never share your data or the contents of your sessions with any third party."
  },
  {
    question: "What kind of guidance can I expect?",
    answer: "Our readers offer empowering guidance, not definitive predictions. The goal is to help you explore possibilities, understand your own energy, and connect with your intuition. We believe you are the ultimate authority in your life; our readers are here to provide clarity and support on your journey."
  },
  {
    question: "What if I'm not satisfied with my reading?",
    answer: "We strive for every user to have a positive experience. If you feel your reading was not a good fit or did not meet your expectations, please contact our support team within 24 hours. We will review the situation and, if appropriate, issue a credit for another session."
  }
];

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white hover:text-pink-200 transition-colors">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <svg className="w-6 h-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-6-6h12" />
           </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-rose-200/90 leading-relaxed text-left pl-1">
          {answer}
        </p>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in py-10 px-4">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-12" style={{ textShadow: '0 0 12px rgba(244, 114, 182, 0.7), 0 0 25px rgba(244, 114, 182, 0.5)' }}>
        Frequently Asked Questions
      </h2>
      <div className="w-full bg-black/20 border border-white/20 rounded-2xl p-4 md:p-8 backdrop-blur-sm">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;