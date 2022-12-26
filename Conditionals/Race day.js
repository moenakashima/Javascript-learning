let raceNumber = Math.floor(Math.random() * 1000);

let  registeredEarly = false;
const age = 18;

if(registeredEarly && age > 18){
  raceNumber += 1000;
}

if(registeredEarly && age > 18){
  console.log(`Your race number is ${raceNumber}. Your race will start at 9:30 am.`);
} else if(!registeredEarly && age > 18){
  console.log(`Your race number is ${raceNumber}. Your race will start at 11:00 am.`);
} else if(age <= 18){
  console.log('Please approach the registration desk, thanks!');
}

