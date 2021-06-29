function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return "This one is on me!";
  } else if (num < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  let answer = city === "NYC" ? "Ok, sounds good." : "No go.";
  return answer;
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  }
  return response;
}
