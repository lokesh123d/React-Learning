import React, { useContext, useState, useEffect } from 'react'
import { TableContext } from "../Context/TableData";


const Edit = ({isOpen}) => {

    
    
      const { data, setData, editIndex, seteditIndex } = useContext(TableContext);
      const [title, setTitle] = useState("");
      const [category, setCategory] = useState("");
      const [amount, setAmount] = useState(0);

      useEffect(() => {
        if (editIndex !== null && data[editIndex]) {
          const item = data[editIndex];
          setTitle(item.title);
          setCategory(item.category);
          setAmount(item.amount);
        } else {
          setTitle("");
          setCategory("");
          setAmount(0);
        }
      }, [editIndex, data, isOpen.isEditOpne]);

      function submitHandler(e) {
        e.preventDefault();

        if (editIndex !== null) {
          const updatedData = [...data];
          updatedData[editIndex] = {
            ...updatedData[editIndex],
            title,
            category,
            amount: Number(amount)
          };
          setData(updatedData);
          seteditIndex(null);
        } else {
          const newData = {
            title,
            category,
            amount: Number(amount),
            id: Date.now()
          };
          setData([...data, newData]);
        }

        setTitle("");
        setCategory("");
        setAmount(0);
        isOpen.setisEditOpne(!isOpen.isEditOpne);
      }



  return (
    <div style={{display:(isOpen.isEditOpne)?'block':'none'}} className="absolute inset-0 backdrop-blur-md bg-black/30 flex justify-center items-center w-full h-screen">
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
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </form>

    </div>
  )
}

export default Edit