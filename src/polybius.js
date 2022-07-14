const polybiusModule = (function () {
  
const encodeCypher = {
    'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51',
    'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52',
    'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53',
    'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
    'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55', [' ']:" "
  }
  
  const decodeCypher = {
    '11':'a', '21':'b', '31':'c', '41':'d', '51':'e',
    '12':'f', '22':'g', '32':'h', '42':'(i/j)', '52':'k',
    '13':'l', '23':'m', '33':'n', '43':'o', '53':'p',
    '14':'q', '24':'r', '34':'s', '44':'t', '54':'u',
    '15':'v', '25':'w', '35':'x', '45':'y', '55':'z', [' ']:" "
  }
   /*if encode is true return the value of input seperated into a string and mapped into a new array. the new array will contain the value returned from the encodeCypher. join the message into a string and return it*/ 
  /*else if not encoding check to see if the inputs length without any spaces are even, if it isn't return false.*/
  /*use match to map the input into an array of numbers, containing the return value from decodeCypher.*/
  //join into a string .
  function polybius(input, encode = true) {
    if(encode){
      return input.split('').map(letter => { 
          return encodeCypher[letter.toLowerCase()]
      }).join('');
   } else {
      if(input.replace(/\s/g, '').length % 2 !== 0)return false;
      return input.match(/[0-9]{2}|\s/g).map(number => {
          return decodeCypher[number]
      }).join('')
   }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
