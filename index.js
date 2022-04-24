/*
Нужно найти максимальное число одинаковых подряд идущих символов в строке.
*/

var text = "444444535fgdfg gggggggg gdfg";

function numberOfRepeat(text){
  var mas_symb = text.split(''); // O(n)
  var countRepeat = 1;
  var maxCount = 1;
  for (var i = 0 ; i < mas_symb.length -1 ; i++) { // O(n)
    if (mas_symb[i] == mas_symb[i+1]) {
      countRepeat += 1;
    } else {
      if (countRepeat > maxCount) maxCount = countRepeat; 
      countRepeat = 1;
    }
    
  }

  return maxCount;
}

console.log(numberOfRepeat(text));