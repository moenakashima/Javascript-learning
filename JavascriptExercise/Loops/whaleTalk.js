const input =  'a whale of a deal!';
const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  if (input[inputIndex] === 'e'){
    resultArray.push(input[inputIndex]);
  }
  if (input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex]);
  }
  // console.log('input Index is ' + inputIndex);
  for(let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    // console.log('vowels Index is ' + vowelsIndex);
    if(input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(input[inputIndex]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log('\"' + resultString + '\"');
