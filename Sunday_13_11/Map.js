
/* task1 /// Map

const numbers = [4, 5, 100,7];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 2;
}
*/

/* task2
var arr = [2,5,100];
var strArr = arr.map(function(s){return s.toString()});
console.log(strArr);
*/


/* task3 .......... substr(start,end)
function capitalizeNames(array){
  let upper=array.map(function(string){
    return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase();
  })
  return upper
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
*/


/* task4
function namesOnly(arr){
  let NameArr = arr.map(n=>n.name);
  return NameArr;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie", age: 80 },{ name: "Eric Jones",age: 2}, {name: "Paris Hilton",age: 5},{ name: "Kayne West",age: 16},{ name: "Bob Ziroll",age: 100 }
]));
*/


/* task5
console.log(makeStrings([
     {
       name: "Angelina Jolie",
        age: 80
     },
    {
      name: "Eric Jones",
      age: 2
     },
     {
       name: "Paris Hilton",
      age: 5
     },
    {
        name: "Kayne West",
        age: 16
    },
     {
         name: "Bob Ziroll",
         age: 100
     }
   ])); 
function makeStrings(arr){

let mackes=arr.map((arr =>{
if (arr.age>=17){
  console.log(arr.name + " can go to The Matrix")
}
else {
  console.log(arr.name + " is under age!!")
}
})
)
}
*/

/* task6
console.log(readyToPutInTheDOM([
   {
      name: "Angelina Jolie",
      age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
 ])); 

 function readyToPutInTheDOM(arr){
let read=arr.map((arr=>{
console.log('<h1>'+arr.name +'</h1>'+'<h2>'+arr.age+'</h2>')

}))
 }
*/

/* task7
console.log(doubleValues([
  
    1,-2,-3
  
])); 

function doubleValues(arr){
  return arr.map((value) => value * 2);   
}
*/

/* task8
console.log(valTimesIndex([
  
  1,-2,-3

])); 

function valTimesIndex(arr){
  return arr.map(function(value,index){
return value*index;
  } )
 
}
*/

/* task 9
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name' )); 

function extractKey(arr, key){
  
  return arr.map(function(value){
    return value[key];
      } ) 
}
*/

/* task 10
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]))

function extractFullName(arr){
 return arr.map(function(value){
  return value.first + value.last
 })
}
*/