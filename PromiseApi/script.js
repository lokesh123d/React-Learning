// const p1 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('p1 got success'),3000);
//     setTimeout(()=>reject('p1 got failed'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('p2 got success'),2000);
//     setTimeout(()=>reject('p2 got reject'),2000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('p3 got success'),1000);
//     setTimeout(()=>reject('p3 got reject'),1000);
// })


// Promise all 

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })



// promise all seatteled

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })


// promise.race

// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })


// Promise.any

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })



let arr =[1, 2, 3]
let k = 0

function findSumLongest(arr,k){
let longest = 0;
let current = 0;
for(let i =0;i<arr.length;i++){
    let sum = 0;
    for(let j=i;j<arr.length;j++){
        if(sum <k){
sum+=arr[j];
current++;
        }else if(sum == k){
            if(longest<current){
                longest = current;
            }
        }else if (sum>k){
            current = 0;
            break;
        }
    }
}
console.log(longest)

}
// findSumLongest(arr,k)



function totalSubarray(arr,k){
let total = 0;
for(let i = 0;i<arr.length;i++){
    let sum = 0;
    for(let j = i;j<arr.length;j++){
sum+=arr[j];
if(sum == k ){
total++
}
    }
}
console.log(total)

}
// totalSubarray(arr,k);




function longestsumEvenarr(arr){
let iseven = null;
(arr[0]%2 ==0)?iseven=false:iseven=true;

let longest = 0;
for(let i = 0;i<arr.length;i++){
    let count = 0;
    for(let j = i;j<arr.length;j++){
        if(iseven){
        iseven = !iseven;
        if(count>longest){
            longest = count;
        }
            count = 0
            break;
        }else{
            //  iseven = !iseven;
        if(count>longest){
            longest = count;
        }
            count ++
        }
    }

}
console.log(longest)



}
// longestsumEvenarr(arr);


function longestConcetative(arr){

let longest = 0;
for(let i = 0;i<arr.length;i++){
let count = 0;
for(let j = i;j<arr.length-1;j++){
if(arr[i]+1 == arr[j]){

}
count++

// console.log(count)

}

}
console.log(longest)
}
longestConcetative([0,3,7,2,5,8,4,6,0,1])
