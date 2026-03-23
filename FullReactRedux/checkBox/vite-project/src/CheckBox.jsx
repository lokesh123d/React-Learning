const CheckBox = ({items}) => {
     return (
       <div>
         <input type="checkbox" />
         <span>{items.name}</span>
       </div>
     );
}

export default CheckBox