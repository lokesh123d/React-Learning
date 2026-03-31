// // let arr = [5,3,2,,6,2,3,6];
// // let max = Math.max(...arr);
// // let newarr = arr.filter((val)=>{
// // if(val!=max){
// // return val;
// // }
// // })
// // let newMax = Math.max(...newarr);
// // console.log(newMax);

// const arr = [
//   { name: "lokesh", age: 17 },
//   { name: "ankush", age: 22 },
//   { name: "sreegith", age: 35 },
// ];

// const main = document.querySelector('.main');
// for(let i = 0;i<arr.length;i++){
//     let h1 = document.createElement('h1');
//     let span = document.createElement('span');
//     h1.textContent = (arr[i].name);
//     span.innerHTML= (arr[i].age);
//   main.append(h1,span);
// }

// let arr2 = [1,2,3,4,67,3];
// let max = Math.max(...arr2);
// console.log(max);
// let min = Math.min(...arr2);
// console.log(min);

// // function average(arr2){

// // }

// for(let i = 0;i<arr2.length;i++){

// }

// // fetch data form the resource
// // list those data in html
// // impliment pagination
// // search call and filter

// a settimeout usign the set tinterval

// handmadesettimeout(() => {
//   console.log("js");
// }, 2000);

// function handmadesettimeout(func, delay) {
//   let timerId = setInterval(() => {
//     do {
//       func();
//       clearInterval(timerId);
//     } while (false);
//   }, delay);
// }

// async function makePromiseAll([...promises]){
// let ans = [];
// promises.forEach(async (promise)=>{
//   try{
// const response = await promise;
// ans.push(response);
// }catch(err){
// return err;
//   }
// })

// return ans
// }

// let pr1 = new Promise((res,rej)=>{
//   rej('hey');
// })

// let pr2 = new Promise((res,rej)=>{
//   res('hey from 2');
// })

// let pr3 = new Promise((res,rej)=>{
// setTimeout(()=>{
//   res('hey from 3');

// },2000)
// })

// console.log(makePromiseAll([pr1,pr2,pr3]));;

let obj = {
  name: "lokesh",
  passion: "frontend development",
  location: {
    state: "uttarakhand",
    district: "nainital",
    village: "sunkity",
    arr2: [2, 3, 4, 5],
  },
  arr: [1, 2, 3, 4, 6],
};

function customDeepCloning(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      if (Array.isArray(obj[key])) {
        result[key] = obj[key];
      } else {
        let newRes = customDeepCloning(obj[key]);
        result[key] = newRes;
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
let deepcopy = customDeepCloning(obj);
