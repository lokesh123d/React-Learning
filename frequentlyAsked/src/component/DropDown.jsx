import React, { useState } from "react";

const DropDown = ({ faqs }) => {
  const [currentFeqOpen, setcurrentFeqOpen] = useState(null);

  return (
    <div className="mainContainer">
      {faqs.map((faq, index) => (
        <div className="card" key={index}>
          <div className="faqText">
            <div>
              <h2>{faq.question}</h2>{" "}
              <div
                className="dropIcon"
                onClick={() =>
                  setcurrentFeqOpen(currentFeqOpen == index ? null : index)
                }
              >
                🔻
              </div>
            </div>

            <div className={currentFeqOpen == index ? "openfaq" : "normalFaq"}>
              {faq.answer} !
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
