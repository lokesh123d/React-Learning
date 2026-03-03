import React, { createContext, useState } from "react";

export const TableContext = createContext();

const TableData = ({ children }) => {
  const [data, setData] = useState([]);
  const [editIndex, seteditIndex] = useState(null);
  
  return (
    <TableContext.Provider value={{ data, setData, editIndex, seteditIndex }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableData;
