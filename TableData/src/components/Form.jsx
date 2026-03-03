import React, { useContext, useEffect, useState } from "react";
import { TableContext } from "../Context/TableData";

const Form = () => {
  const { data, setData } = useContext(TableContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);


  function submitHandler(e) {
    e.preventDefault();

    const newData = {
      title,
      category,
      amount: Number(amount),
      id:Date.now()
    };

    setData((prev) => [...prev, newData]);

    setTitle("");
    setCategory("");
    setAmount(0);
  }

  return (
    <div>
      <form
        className="bg-white shadow-lg py-10 px-5"
        onSubmit={submitHandler}
      >
        <p>Title here</p>
        <input
          className="w-100 bg-gray-200 px-4 py-1 rounded-md m-2 outline-blue-500"
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p>Category</p>
        <input
          className="w-100 bg-gray-200 px-4 py-1 rounded-md m-2 outline-blue-500"
          type="text"
          placeholder="Category"
          required
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <p>Amount</p>
        <input
          className="w-100 bg-gray-200 px-4 py-1 rounded-md m-2 outline-blue-500"
          type="number"
          placeholder="Amount"
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-1 rounded-md hover:bg-blue-700 block m-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;