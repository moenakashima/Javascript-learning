// Write your code below
const bobsFollowers = ['Mark','Mike','Kai','Amanda'];
const tinasFollowers = ['Mike','Amanda','Bob'];

let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j] )
    { mutualFollowers.push(bobsFollowers[i])
  };
 }
}