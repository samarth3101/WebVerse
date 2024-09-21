const max = prompt("enter the number to start or type quit to end = ");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number or enter quit to end game = ");

while (true) {
  if (guess == "quit") {
    console.log("User Quited..!!");
    break;
  }
  if (guess == random) {
    console.log("You guessed the right number. Congratulations!!!!");
    break;
  } else if (guess < random) {
    guess = prompt("Your guess was to small. Try again = ");
  } else {
    guess = prompt("Your guess was to large. Try again = ");
  }
}
