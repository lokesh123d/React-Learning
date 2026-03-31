import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Ueretails = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [formData, setformData] = useState({
    name: "",
    age: 18,
    mobileNumber: 8091780737,
    address: "india",
    whyLogin: "",
    hobby: "",
  });

  function submitForm() {
    console.log(formData);
  }
  return (
    <div>
      <form className="currentShowing">
        {currentStep == 1 ? (
          <div>
            <h2>First Page</h2>
            <input
              type="text"
              placeholder="enter your name"
              value={formData.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
            />
            <input
              value={formData.age}
              onChange={(e) =>
                setformData({ ...formData, age: e.target.value })
              }
              type="number"
              placeholder="enter your age"
            />
          </div>
        ) : currentStep == 2 ? (
          <div>
            <h2>second Page</h2>
            <input
              type="text"
              placeholder="mobile number"
              value={formData.mobileNumber}
              onChange={(e) =>
                setformData({ ...formData, mobileNumber: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="address"
              value={formData.address}
              onChange={(e) =>
                setformData({ ...formData, address: e.target.value })
              }
            />
          </div>
        ) : (
          <div>
            <h2>third Page</h2>
            <input
              type="text"
              placeholder="why you login here"
              value={formData.whyLogin}
              onChange={(e) =>
                setformData({ ...formData, whyLogin: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="explain your hobby with the seprated comma"
              value={formData.hobby}
              onChange={(e) =>
                setformData({ ...formData, hobby: e.target.value })
              }
            />
          </div>
        )}
      </form>
      <div>
        <button
          onClick={() => setcurrentStep(currentStep - 1)}
          disabled={currentStep == 1 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={() =>
            currentStep == 3 ? submitForm() : setcurrentStep(currentStep + 1)
          }
          //   disabled={currentStep == 3 ? true : false}
        >
          {currentStep == 3 ? "submit Form" : "next"}
        </button>
      </div>
    </div>
  );
};

export default Ueretails;
