function closeBracket(s, open){
  let closeCount = 0
  let openCount = 0

  for(var i = open; i < s.length; i++){
    if (s[i] === "["){
      openCount += 1
    } else if (s[i] === "]"){
      closeCount += 1
      if(closeCount === openCount){
        return i
      }
    }
  }
}

function decodeString(s){
  let decodedString = ''
  for (var i = 0; i < s.length; i++){
    if(/\d/.test(s[i])){
      let open = i + 2
      let close = closeBracket(s, i)
      for(var j = 1; j < parseInt(s[i]); j++){
        decodedString += s.slice(open, close)
      }
      decodedString = decodeString(decodedString)
    } else if (/[a-zA-Z]/.test(s[i])) {
      decodedString += s[i]
    }
  }
  return decodedString
}
