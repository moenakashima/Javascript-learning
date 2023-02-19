/*
const getSleepHours = day =>{
 switch(day){
  case 'monday':
    return 8
    break;
  case 'tuesday':
    return 7
    break;
  case 'wednesday':
    return 8
    break;
  case 'thursday':
    return 5
    break;
  case 'friday':
    return 7
    break;
  case 'saturday':
    return 6
    break;
  case 'sunday':
    return 8
    break;
  default:
    return "Error!"
  }
};


const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
*/

// refacoted version
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

console.log('You slept ' + getActualSleepHours() + ' hours this week.');

const getIdealSleepHours = idealHours => 
idealHours *= 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed.');
    console.log('You slept over ' + (actualSleepHours - idealSleepHours) + ' hours than needed.');
  } else {
    console.log('You should get more rest.');
    console.log('You slept under ' + (idealSleepHours - actualSleepHours) + ' hours than needed.');
  }
};

calculateSleepDebt();
