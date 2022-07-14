
const caesarModule = (function () {
  /* if shift === 0 or undefined, is less than -25, and greater than 25 return false.*/
  /*if encode === false turn shift into a negative number by multiplying by 2 and subtracting the number from shift. it will return a negative value, which will send shift to the left.*/ 
  //convert input into lowercase characters
  //add the input with lowercase letters into an array and then map the array to create a new array.
  //convert the elements into its ascii code number
  //if the number is between 97 and 122 it will be a lowercae letter so return it to its string form.
  //create a new variable which will be the elements ascii number added to the shiftt amount. 
  // if newAscii is less than 97 add 26 to the number, which will return its wrap around value.
  // if newAscii greater than 122 add -26 to the number, which will return its wrap around value.
  //convert the number back into a string and add it to the mapped array.
  //return decoded joined into a string
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false;
    
    if (encode === false) shift = shift - (shift * 2);
    
    let lowerCase = input.toLowerCase();
    
    let decoded = [...lowerCase].map((letter) => {
      let ascii = letter.charCodeAt();
      if (ascii < 97 || ascii > 122) return String.fromCharCode(ascii);
      let newAscii = ascii + shift;
      if (newAscii < 97) newAscii += 26;
      if (newAscii > 122) newAscii -= 26;
      return String.fromCharCode(newAscii);
    });
    return decoded.join("");
  };

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
