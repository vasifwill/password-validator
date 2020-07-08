  function validatePassword(psw) {
  let i = 0
    
  var character = ''
  var isLower = false
  var isUpper = false
  var isNumeric = false
  var isSpecialCharacter = false
  if(psw.length < 8) {
    return false
  }
 
  while( i < psw.length ) {
    character = psw.charAt(i)
    if(isLetter(character) && character == character.toLowerCase()) {
      isLower = true
    }
    if(isLetter(character) && character == character.toUpperCase()) {
      isUpper = true
    }
    if(!isNaN(character)) {
      isNumeric = true
    }
    if(!isLetter(character) && isNaN(character)) {
      isSpecialCharacter = true  
    }
    i++
  }
    if(isLower && IsUpper && IsNumeric && IsSpecialCharacter) {
      return true

    }else{
      return false 
    }
  
    function isLetter (character){
      if(character.toUpperCase() == character.toLowerCase()){
        return false
      }
        return true
    
        
    }
    module.exports = validatePassword