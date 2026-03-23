import React, { useState } from "react";
import CheckBox from "./CheckBox";

const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          { id: 3, name: "Orange" },
          { id: 4, name: "Lemon" },
          { id: 5, name: "Lime" },
        ],
      },
      {
        id: 6,
        name: "Berries",
        children: [
          { id: 7, name: "Strawberry" },
          { id: 8, name: "Blueberry" },
          { id: 9, name: "Raspberry" },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Vegetables",
    children: [
      {
        id: 11,
        name: "Leafy",
        children: [
          { id: 12, name: "Spinach" },
          { id: 13, name: "Lettuce" },
        ],
      },
      {
        id: 14,
        name: "Root",
        children: [
          { id: 15, name: "Carrot" },
          { id: 16, name: "Beetroot" },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Drinks",
    children: [
      {
        id: 18,
        name: "Hot",
        children: [
          { id: 19, name: "Tea" },
          { id: 20, name: "Coffee" },
        ],
      },
      {
        id: 21,
        name: "Cold",
        children: [
          { id: 22, name: "Juice" },
          { id: 23, name: "Soda" },
        ],
      },
    ],
  },
];

const App = () => {
  const [checkItems, setcheckItems] = useState({ 1: true });

  function handleCheck(items) {



    if (items.children) {
      items.children.forEach((val) => {
        setcheckItems(() => {
          return {
            ...checkItems,
            [val.id]: true,
          };
        });
      });
    }
    setcheckItems((prev) => {
      return {
        ...checkItems,
        [items.id]: true,
      };
    });
  }


  const ShowBoxes = (checkboxesData) => {
    return checkboxesData.map((items) => {
      return (
        <div key={items.id}>
          <CheckBox
            items={items}
            onClick={() => {
              handleCheck(items);
            }}
          />
          {items.children ? (
            <div style={{ paddingLeft: 20 }}>{ShowBoxes(items.children)}</div>
          ) : null}
        </div>
      );
    });
  };

  return <div>{ShowBoxes(checkboxesData)}</div>;
};

export default App;
