function match(txt, pattern){
  var patternLen = pattern.length;
  var txtLen = txt.length;

  if(patternLen == 1 && txtLen == 1 && (pattern == "." || pattern==txt)){
      return true;
  }else if(txt == pattern || pattern == '.*'){
    return true;
  }else if(pattern[patternLen-1] != '*'){
    last_val = pattern.substring(pattern.lastIndexOf('*')+1, patternLen);
    first_val = pattern.substring(0, pattern.indexOf('*'));
    if(txt.lastIndexOf(last_val)+1 == txtLen && txt.indexOf(first_val) == 0){
      return matchPattern(pattern, txt, patternLen);
    }else{
      return false;
    }
  }else{
    return matchPattern(pattern, txt, patternLen);
  }
}

function matchPattern(pattern, txt, patternLen){
  matched_element = '';
  flag = false;
  for(j=0; j<patternLen; j++){
    if(pattern[j] == '*'){
      if((txt.indexOf(pattern[j-1]) > -1) || txt == ''){
        matched_element = txt[txt.indexOf(pattern[j-1])];
        flag = true;
      }else if(pattern[j-1] == '.'){
        next_element_index = txt.indexOf(pattern[j+1]);
        if( next_element_index > -1 && txt.indexOf(matched_element) > next_element_index){
          flag = false;
          return false;
        }
      }
    }else if(pattern[j] == '.' && pattern[j+1] == '*'){
      flag = true;
    }else if(pattern[j] == '.' && pattern[j+1] != '*'){
      j++;
    }
  }
  return flag;
}


console.log( match('a', 'a') )
console.log( match('a', 'a*') )
console.log( match('', 'a*') )
console.log( match('', 'a*a') )
console.log( match('a', '.') )
console.log( match('a', '.*') )
console.log( match('ab', 'a*b*') )
console.log( match('b', 'a*.*b') )
console.log( match('ab', 'a*c') )


