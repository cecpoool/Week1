var numberSubmit3 = null;
var guess1 = 25;
var guess2 = 25;
var guess3 = 25;
var guess4 = 25;
function numberResult() {
    return Math.floor(Math.random() * Math.floor(101));
}

var lucky = numberResult();
console.log(lucky);
var butt1 = document.getElementById("guessBtn1");
var butt2 = document.getElementById("guessBtn2");
var butt3 = document.getElementById("guessBtn3");
var butt4 = document.getElementById("guessBtn4");

butt3.onclick = function () {
    guess3--;
    guessreduc()
    var guessNum3 = document.getElementById("heading2");
    var newmessage3 = document.getElementById("headingFinal");

    if (guess3 > 0) {
        numberSubmit3 = document.getElementById("guess3").value;
        var numberSub32 = parseInt(numberSubmit2);
        console.dir()
        if (numberSub32 === lucky) {
            newmessage3.innerHTML = "YOU HAVE GUESSED CORRECTLY - CONGRATS!"
            guessNum3.innerHTML = " ";
        } else {
            newmessage3.innerHTML = "UH-OH - GUESS AGAIN!"
        }
    } else if (guess3 === 0) {
        guessNum3.innerHTML = "YOU FAILED ASSHOLE";
        newmessage3.innerHTML = ""
    }


};


function submit() {
    guess1--;
    guessreduc()
    var guessNum1 = document.getElementById("heading1");
    var newmessage1 = document.getElementById("headingFinal");

    if (guess1 > 0) {
        numberSubmit1 = document.getElementById("guess1").value;
        var numberSub12 = parseInt(numberSubmit1);
        console.dir()
        if (numberSub12 === lucky) {
            newmessage1.innerHTML = "YOU HAVE GUESSED CORRECTLY - CONGRATS!"
            guessNum2.innerHTML = " ";
        } else {
            newmessage1.innerHTML = "UH-OH - GUESS AGAIN!"
        }
    } else if (guess1 === 0) {
        guessNum1.innerHTML = "YOU FAILED ASSHOLE";
        newmessage1.innerHTML = ""
    }

}

// function numCheck() {
//     if (numberSubmit === lucky) {
//         return true;
//     }
// }

function guessreduc() {
    var guessNum = document.getElementById("heading1");
    guessNum.innerHTML = "You now have " + guessA + " guesses";
}