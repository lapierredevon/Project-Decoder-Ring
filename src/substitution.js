//create a variable for the alphabet and another variable for an array
/*use new set to return an array without any duplicates so I can check for length*/
/*if alphabet equals undefined, and if alphabet is greater than 26, return false*/
//split the alphabet into an array
/* if encode is true run a for loop for i until it reaches 26*/
//for each itiration add abc elements and alphabet elements to code array
//if encode = false for the decode message add symbols and space to abc element in the code array. 
/* create a variable for the answer, which will convert the input to lowercase letters. Seperate the characters into an array and map through the array to create a new array containing spaces,the decoded or encoded letters*/
  //return the answer key which has been joined into a string


const substitutionModule = (function () {

  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  const code = [];
  function substitution(input, alphabet, encode = true) {

    const repeatCheck = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...repeatCheck].length < 26) return false;
        
    alphabet.split("");
    if (encode)
    {
      for (let i = 0; i < 26; i++)
      {
        code[abc[i]] = alphabet[i];
        
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        code[alphabet[i]] = abc[i];
      }
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return code[letter]
    })
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };