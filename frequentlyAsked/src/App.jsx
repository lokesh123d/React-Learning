import React from "react";
import DropDown from "./component/DropDown";

const faqs = [
  {
    id: 1,
    question: "How do I create an account?",
    answer:
      "Click the 'Sign Up' button at the top right, enter your email, and create a password.",
  },
  {
    id: 2,
    question: "What are the subscription plans?",
    answer: "We offer Free, Pro ($10/mo), and Enterprise plans.",
  },
  {
    id: 3,
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel anytime in your Account Settings under 'Billing'.",
  },
  {
    id: 4,
    question: "Is there a free trial?",
    answer: "Yes, all new users get a 14-day free trial of the Pro plan.",
  },
  {
    id: 5,
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page and follow the email instructions.",
  },
];

const App = () => {
  return (
    <div>
      <DropDown faqs={faqs} />
    </div>
  );
};

export default App;
