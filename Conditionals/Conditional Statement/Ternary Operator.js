let isLocked = false;

// is/else文
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

// リファクタリング
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;
// if/else文
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// リファクタリング
isCorrect ?  console.log('Correct!') :
console.log('Incorrect!');

let favoritePhrase = 'Love That!';
// if/else文
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// リファクタリング
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");