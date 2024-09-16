const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if ( guess == "quit"){
        console.log("User quit");
        break;
    }
    if ( guess == random){
        console.log("You are right!! random number was",random);
        break;
    } else if (guess < random){
        guess = prompt("Your guess was small. Try again");
    } else {
        guess = prompt("Number was large. Try again");
    }
}