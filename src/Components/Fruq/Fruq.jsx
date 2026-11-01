import { useState } from 'react';
import './Fruq.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
        <span>{question}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const Fruq = () => {
  const faqData = [
    {
      question: 'What are my payment option?',
      answer: 'You can pay using credit card, debit card, or PayPal.'
    },
    {
      question: 'How can I invite collaborator to platform?',
      answer: 'After creating your account, you will have an opportunity to invite collaborators by entering their email addresses. An invitation will be sent automatically, and they will confirm through the email.'
    },
    {
      question: 'Can I upgrade my plan?',
      answer: 'Yes, you can upgrade your plan anytime through the account settings.'
    },
    {
      question: 'Can I cancel my plan at anytime?',
      answer: 'Yes, you have the flexibility to cancel your plan anytime without any additional charges.'
    }
  ];

  return (
    <div className="container">
        <div className="faq-section">
      <h2>Frequently Asked Question</h2>
      <p className='some'>Something is not clear? You need help? Check our FAQ section</p>
      {faqData.map((faq, index) => (
        <FAQItem  key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    </div>
  );
};

export default Fruq;