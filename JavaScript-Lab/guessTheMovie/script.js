//First approach 

const favMovie = "welcome";
let guess = prompt("Guess The movie = ");

while (guess !== favMovie && guess !== "quit") {
  guess = prompt("Please Try again, rewrite guess here = ");
}
if (guess === favMovie) {
  console.log(`Congratulations, You guess the right movie -  ${favMovie}`);
} else {
  console.log("User Quited...!");
}


// second approach using break 

const favmovie = "baby";

let guesss = prompt("Guess my favourite movie = ");


while (guesss !== favmovie){
    if (guess =="quit"){
        console.log("User Quited...!!");
        break;
    }
    guesss = prompt("wrong guess, Please try again here = ");
}
if (guesss === favmovie){
    console.log(`Congrats, you guessed the right movie - ${favmovie}`);
}