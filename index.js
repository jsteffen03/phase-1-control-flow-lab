function scuberGreetingForFeet(num){
  if (num <= 400) {
     return 'This one is on me!';
  } else if (num > 400 && num <= 2000) {
    return 'That will be twenty bucks.';
  } else if (num > 2000 && num <= 2500)  {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  const cityMessage = city === "NYC" ? "Ok, sounds good." : "No go."
   return cityMessage;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}