// Code your solutions in this file

function writeCards(array, name) {
    let emptyArrays =[];
    for (let i= 0; i < array.length; i++) {
      let emptyArray =`Thank you, ${array[i]}, for the wonderful surprise gift!`;
      emptyArrays.push(emptyArray);
      debugger;
    }
    return emptyArrays;
  }
  function countDown(num) {
    while (num>=0) {
      console.log(num--);
    }
  }
  console.log(countDown(10))