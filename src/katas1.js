function oneThroughTwenty(x) {
    let end = x
    let count = 1
    while(count <= x){
     console.log(count)
      count++
    }
}

(oneThroughTwenty(20))

console.log('---------------------------------------------------------')
function evensToTwenty(x) {
    let end = x
    let count = 1
    while(count <= x){
      if(count % 2 === 0){
        console.log(count)
      }
      count ++
    }
  
}

evensToTwenty(20)
console.log('---------------------------------------------------------')

function oddsToTwenty(x) {
  let end = x
  for(let start = 1; start <= x; start++){
    if(start % 2 === 1){
      console.log(start)
    }
  }
   
}

oddsToTwenty(20)

console.log('---------------------------------------------------------')

function multiplesOfFive(x) {
  for(let count = 5; count <= x; count++){
    if(count % 5 === 0){
      console.log(count)
    }
  }

}

multiplesOfFive(100)

console.log('---------------------------------------------------------')

function squareNumbers(x){
  for(let count = 1; count <= x; count++){
    let value = count * count
    if(value === count * count){
      console.log(value)
    }     
  }
}  

squareNumbers(10)

console.log('---------------------------------------------------------')

function countingBackwards(x) {
  let count = 20
  let end   = x
  while(count >= x){
    console.log(count)
    count--
  }
}

countingBackwards(1)
console.log('---------------------------------------------------------')

function evenNumbersBackwards(x) {
  for(let count = 20; count >= x; count--){
    if(count % 2 === 0){
      console.log(count)
    }
  }
}

evenNumbersBackwards(1)
console.log('---------------------------------------------------------')

function oddNumbersBackwards(x) {
 let count = 20
 do{
   if(count % 2 === 1)
   console.log(count)
   count--
 }while(count >=x)
}

oddNumbersBackwards(1)
console.log('---------------------------------------------------------')

function multiplesOfFiveBackwards(x) {
 let count = 100
  while(count >= x){
    if(count % 5 === 0){
      console.log(count)
    }
    count--
  }
}

multiplesOfFiveBackwards(5)
console.log('---------------------------------------------------------')

function squareNumbersBackwards(x) {
   for(let count = 10; count >= x; count--){
     let value = count * count
     console.log(value)
   }
}

squareNumbersBackwards(1)
