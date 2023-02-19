// Truthy and Falsy
let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
let tool = 'marker';

let writingUtensil = tool|| 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);