var numberSubmit1 = null;
var newmessage1 = document.getElementById("headingFinal1");
var guessNum1 = document.getElementById("heading1");
var guesses1 = document.getElementById("guesses1");
var guesses2 = document.getElementById("guesses2");
var numberSubmit2 = null;
var newmessage2 = document.getElementById("headingFinal2");
var guessNum2 = document.getElementById("heading2");
var guess1 = 50;
var guess2 = 50;
guess1Array = [];
guess2Array = [];

function numberResult() {
    return Math.floor(Math.random() * Math.floor(101));
}

var lucky = numberResult();
console.log(lucky);

function submit1() {
    guess1--;
    guessreduc1()

    if (guess1 > 0) {
        numberSubmit1 = document.getElementById("guess1").value;
        var numberSub12 = parseInt(numberSubmit1);
        console.log(typeof numberSub12)
        guess1Array.push(numberSubmit1);
        console.log(guess1Array);

        if (numberSub12 === lucky) {
            newmessage1.innerHTML = "YOU HAVE GUESSED CORRECTLY - CONGRATS!"
            guessNum1.innerHTML = " ";
        } else {
            newmessage1.innerHTML = "UH-OH - GUESS AGAIN!"
            guess1Array.toString()
            guesses1.innerHTML = "You've guessed " + guess1Array;
        }
    } else if (guess1 === 0) {
        guessNum1.innerHTML = "YOU FAILED ASSHOLE";
        newmessage1.innerHTML = ""
    }

}

function submit2() {
    guess2--;
    guessreduc2()

    if (guess2 > 0 && guess2 < 100) {
        numberSubmit2 = document.getElementById("guess2").value;
        var numberSub22 = parseInt(numberSubmit2);
        console.log(typeof numberSub22)
        guess2Array.push(numberSubmit2);
        console.log(guess2Array);
        if (numberSub22 === lucky) {
            newmessage2.innerHTML = "YOU HAVE GUESSED CORRECTLY - CONGRATS!"
            guessNum2.innerHTML = " ";
        } else {
            newmessage2.innerHTML = "UH-OH - GUESS AGAIN!"
            guess2Array.toString();
            guesses2.innerHTML = "You've guessed " + guess2Array;


        }
    } else if (guess2 === 0) {
        guessNum2.innerHTML = "YOU FAILED ASSHOLE";
        newmessage2.innerHTML = ""
    }

}

// function numCheck() {
//     if (numberSubmit === lucky) {
//         return true;
//     }
// }

function guessreduc1() {
    guessNum1.innerHTML = "You now have " + guess1 + " guesses";
}
function guessreduc2() {
    guessNum2.innerHTML = "You now have " + guess2 + " guesses";
}