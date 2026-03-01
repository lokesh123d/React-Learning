// // import React from 'react'
// // import { useState } from 'react'
// // const Practice = () => {

// //     const [first, setfirst] = useState({firstName:"lokesh",secondName:'dangwla'});
// //   function chageVal(){
// //     setfirst( {...first,firstName:'chage'});
// //     console.log(first);

// //   }
// //     return (
// //     <div>
// // <h1>{first.firstName} and last name is {first.secondName}</h1>
// // <button
// // onClick={chageVal}
// // >Add</button>

// //     </div>
// //   )
// // }

// // export default Practice

// import React, { useEffect, useState } from "react";
// const Practice = () => {
//   const [data, setData] = useState([
//     {
//       name: "initial name",
//       passion: "initial passion",
//       hobby: "initial hobby",
//       id: "ksdjflskjl",
//     },
//   ]);

//   function fetchData() {
//     const first = {
//       id: "sdkfljsldf8392u4kjsdf",
//       name: "lokesh dangwal",
//       passion: "frontend develper",
//       hobby: "watching website",
//     };
//     setData([...data, first]);
//   }

//   function chageValue() {
//     // console.log('value is changed....')
//     setData([
//       ...data,
//       {
//         id: "laksjdfljane",
//         name: "xyz",
//         passion: "nothing",
//         hobby: "does",
//       },
//     ]);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//       {data.map((val) => {
//         return (
//           <div key={val.id}>
//             <h1>{val.name}</h1>
//             <h2>{val.passion}</h2>
//             <h3>{val.hobby}</h3>
//           </div>
//         );
//       })}

//       <button onClick={chageValue}>hello</button>
//     </div>
//   );
// };

// export default Practice;

import React, { useEffect, useState } from "react";

const Practice = () => {
  const [data, setdata] = useState([
    {
      data: "this is a data1",
    },
    {
      data: "this is a data2",
    },
  ]);

  useEffect(() => {
    console.log("UseEffect is Triggred");

}, [data]);

function handleClick() {
    //   setdata([{data:'loeksh'}]);
    setdata(data);
  }
  return (
    <div>
      <button onClick={handleClick}>increase</button>
    </div>
  );
};

export default Practice;
