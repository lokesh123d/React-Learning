import React, { useContext } from 'react'
import './context.css'
import { TableContext } from "../Context/TableData";

const ContextMenu = ({showContext,isEditOpne}) => {    
if(!showContext.top|| !showContext.left) return    
let top = showContext.top;
let left = showContext.left;
let id = showContext.id;
  const { data, setData, editIndex, seteditIndex } = useContext(TableContext);
  const [editOpen, setEditOpen] = isEditOpne;

function editTask(e){
  seteditIndex(id);
  setEditOpen(true);
}

function deleteTask(e){
    const itemToDelete = showContext.itemData;
    const updatedData = data.filter((item) => item !== itemToDelete);
    setData(updatedData);
}

  return (
    <div className='context' style={{ top: top+4 + "px", left: left+20 + "px" }}> 
    <div className='flex flex-col bg-white rounded-lg '>
    <button className='bg-blue-400 px-10 py-2 border-2' onClick={(e)=>editTask(e)
    }>Edit</button>
    <button className='bg-blue-400 px-10 py-2 border-2' onClick={(e)=>deleteTask(e)}>Delete</button>
    </div>
    </div>
  )
}

export default ContextMenu