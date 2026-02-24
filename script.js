// let arr = [5,3,2,,6,2,3,6];
// let max = Math.max(...arr);
// let newarr = arr.filter((val)=>{
// if(val!=max){
// return val;
// }
// })
// let newMax = Math.max(...newarr);
// console.log(newMax);

const arr = [
  { name: "lokesh", age: 17 },
  { name: "ankush", age: 22 },
  { name: "sreegith", age: 35 },
];

const main = document.querySelector('.main');
for(let i = 0;i<arr.length;i++){
    let h1 = document.createElement('h1');
    let span = document.createElement('span');
    h1.textContent = (arr[i].name);
    span.innerHTML= (arr[i].age);
  main.append(h1,span);
}



let arr2 = [1,2,3,4,67,3];
let max = Math.max(...arr2);
console.log(max);
let min = Math.min(...arr2);
console.log(min);

// function average(arr2){

// }


for(let i = 0;i<arr2.length;i++){

}

// fetch data form the resource 
// list those data in html
// impliment pagination 
// search call and filter  
