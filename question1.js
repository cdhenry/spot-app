function sortByStrings(s,t){
  let countArray = new Array(t.length).fill(0);
  let sortedString = ""

  for (var i = 0; i < s.length; i++) {
    countArray[t.indexOf(s[i])] += 1
  }

  for (var j = 0; j < countArray.length; j++) {
    for (var k = 0; k < countArray[j]; k++) {
      sortedString += t[j]
    }
  }

  return sortedString
}
