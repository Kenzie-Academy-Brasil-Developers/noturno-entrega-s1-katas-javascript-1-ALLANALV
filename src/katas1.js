
function oneThroughTwenty(x) {
  let meuRetorno = [];

  for (let counter = 1; counter <= x; counter++) {
      meuRetorno.push(counter)
  }
  
  return meuRetorno;
  }
console.log(oneThroughTwenty(20))

function evensToTwenty(x) {
    let list = []
    let count = 1
    while(count <= x){
      if(count % 2 === 0){
        list.push(count)
      }
      count++
    }
    return list
  
}
console.log(evensToTwenty(20))

function oddsToTwenty(x) {
  let list = []
  for(let count = 1; count <= x; count++){
    if(count % 2 === 1){
      list.push(count)
    }
  }
   return list
}

console.log(oddsToTwenty(20))


function multiplesOfFive(x) {
  let list = []
  for(let count = 5; count <= x; count++){
    if(count % 5 === 0){
       list.push(count)
    }
  }
    return list
}

console.log(multiplesOfFive(100))


function squareNumbers(x){
  let list = []
  for(let count = 1; count <= x; count++){
    let value = count * count
    if(value === count * count){
       list.push(value)
    }     
  }
    return list
}  

console.log(squareNumbers(10))


function countingBackwards(x) {
  let list = []
  let count = 20
  while(count >= x){
     list.push(count)
    count--
  }
    return list
}

console.log(countingBackwards(1))

function evenNumbersBackwards(x) {
  let list = []
  for(let count = 20; count >= x; count--){
    if(count % 2 === 0){
      list.push(count) 
    }
  }
    return list
}

console.log(evenNumbersBackwards(1))

function oddNumbersBackwards(x){
  let list = []
  let count = 20
  while(count >= x){
    if(count % 2 === 1){
      list.push(count)   
    }
    count--
  }  
    return list
}

console.log(oddNumbersBackwards(1))

function multiplesOfFiveBackwards(x) {
  let list = []
  let count = 100
  while(count >= x){
    if(count % 5 === 0){
      list.push(count);
    }
    count--
  }
    return list
}

console.log(multiplesOfFiveBackwards(5))

function squareNumbersBackwards(x) {
  let list = [] 
  for(let count = 10; count >= x; count--){
     let value = count * count
      list.push(value);
   }
    return list
}

console.log(squareNumbersBackwards(1))
