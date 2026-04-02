import React, { useEffect, useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
const nameRegex = /^[a-zA-Z0-9_]{3,16}$/;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setisValid] = useState({
    email: false,
    password: false,
    name: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      emailRegex.test(formData.email) &&
      passwordRegex.test(formData.password) &&
      nameRegex.test(formData.name)
    ) {
      console.log("form submitted successfully");
    } else {
      console.log("nahi hua");
    }
  };

  useEffect(() => {}, [formData]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Form Subbmission...</h2>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="enter your name"
        required
        className=""
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="example@example.com"
        required
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="strong password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
