function changePossibilities(amount, denominations) {
  let counter = 0;
  let combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1
  denominations.forEach((denomination) => {
    for(let i = 1; i < combinations.length; i++){
      if (i >= denomination){
        combinations[i] += combinations[i-denomination]
      }
    }
  })
  return combinations[amount]
}


// Recursively
// function changePossibilities(amount, denominations, current = 0) {
//   if(amount === 0){
//     return 1
//   } else if (amount < 0){
//     return 0
//   } else {
//     let possibilities = 0
//     for(let i = current; i < denominations.length; i++){
//       possibilities += changePossibilities(amount - denominations[i], denominations, i)
//     }
//     return possibilities
//   }
// }
