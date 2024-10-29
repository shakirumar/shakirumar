function md(){
    console.log("hello")
 console.log("javascript")
}
md();
//multification
const arr = (a, b) =>{
    console.log(a * b)
};

const print = () =>{
    console.log("javavscript")
};

// countvowel

function countvowel(str){
    for (const char of str){
       console.log(char)
    }
}
// foreach
let aro = ["delhi", "pune", "maharashtra"];

aro.forEach(function printVal(val, idx){
  console.log(val.toUpperCase(),idx);
});

// square riturn 

let nums = [1,2,5,8,6,8]
nums.forEach((num) => {
    console.log(num * num);
});

// map

let n = [25,56,63,50];

let even = n.filter((val) => {
    return val % 2 === 0;
   
});

console.log(even);

// reduce

let u = [2,3,5];
const output = u.reduce((res,curr) => {
 return res +curr;
})
console.log(output);


let j = document.querySelectorAll("p");
console.dir(j);

