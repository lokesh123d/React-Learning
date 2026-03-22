export function fetchuser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       if(0.5>Math.random()){
             resolve(["lokesh", "dangwal"]);
       }
        reject('Failed to fetch user Data')
    }, 2000);
  });
}
