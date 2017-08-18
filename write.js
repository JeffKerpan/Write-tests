function numVowels(str) {
  let vowels = 0;

  if (arguments.length === 0) {
    return vowels;
  }
  if (typeof str !== 'string') {
    return undefined;
  }

  let string = str.split('');

  for (let i=0; i<string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowels ++;
    }
  }
  return vowels;
}

module.exports = numVowels;
