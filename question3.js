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
