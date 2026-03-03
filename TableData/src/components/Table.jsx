import React, { useContext, useState, useEffect } from "react";
import { TableContext } from "../Context/TableData";
import "./Table.css";
import useFilter from "../Hooks/useFilter";
import ContextMenu from "./ContextMenu";

const Table = ({isEditOpne}) => {
  const { data } = useContext(TableContext);

  const totalamount = data.reduce((acc, val) => acc + val.amount, 0);

  const [filterdDataList, setfilterdDataList] = useState([...data]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [showContext, setshowContext] = useState({left:'',top:''});
  
// function showContextmenu(e){
//   e.preventDefault();
//   setshowContext(!showContext);
//   // console.log(e.clientX , e.clientY);
//   // return 
// return <h1>hey</h1>
// }
  
  const categories = [
    "All Category",
    ...new Set(data.map((val) => val.category)),
  ];
  
  useEffect(()=>{
    
    if(selectedCategory=='All Category'){
      setfilterdDataList([...data]);
    }else{
      
      let filterdData = data.filter((val)=>{
        return val.category==selectedCategory
      })
      setfilterdDataList(filterdData);
    }
  },[data ,selectedCategory])



  return (
    <div onClick={(e)=>setshowContext({left:'',top:''})} >
     <ContextMenu showContext={showContext} isEditOpne={isEditOpne}/>
      <table >
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>
              <select 
                name="category" 
                id="category" 
                value={selectedCategory}
                onChange={(e)=>setSelectedCategory(e.target.value)}
              >
                {categories.map((val, idx) => (
                  <option value={val} key={idx}>
                    {val}
                  </option>
                ))}
              </select>
            </th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

          {filterdDataList.map((val, idx) => (
            <tr key={idx} onContextMenu={(e)=>{
              e.preventDefault();
              setshowContext({top:e.clientY,left:e.clientX ,id:idx,itemData:val,data:[filterdDataList,setfilterdDataList]})
            }}>
              <td>{idx + 1}</td>
              <td>{val.title}</td>
              <td>{val.category}</td>
              <td>{val.amount}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>{totalamount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
