/*Task1

function doubleValues(arr) {
  let n = [];
  arr.forEach(function(val) {
    n.push(val * 2);
  });
  return n;
}
console.log(doubleValues([1,2,3]));
*/

/*Task2
  function onlyEvenValues(arr) {
    let n = [];
    arr.forEach(function(value) {
      if (value % 2 === 0) {
        n.push(value);
      }
    });
    return n;
  }

console.log(onlyEvenValues([1,2,3,4,5,6,7,8]));
*/

/*Task3
function showFirstAndLast(arr) {
  let n = [];
  arr.forEach(function(value) {
    n.push(value[0] + value[value.length - 1]);
  });
  return n;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
*/

/*Task4
function addKeyAndValue(arr, key, value) {
  arr.forEach(function(n) {
    n[key] = value;
  });
  return arr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
*/