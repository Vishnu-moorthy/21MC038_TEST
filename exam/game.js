const choices = ["Rock", "Papper", "Scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    // console.log(computerchoice);
    let result = "";

    if (playerchoice === computerchoice) {
        result = "It's TIE";
    } else {
        switch (playerchoice) {
            case "rock":
                (computerchoice === "scissors");
                 result = "YOU WIN!" ;
                break;
            case "paper":
                (computerchoice === "rock") ;
                result= "YOU LOSE!";
                break;
            case "scissors":
                (computerchoice === "paper");
                result= "YOU WIN!" ;
                break;
        }
    }
    playerdisplay.textContent = `PLAYER: ${playerchoice}`;
    computerdisplay.textContent = `computer: ${computerchoice}`;
    resultdisplay.textContent = result;
    //  console.log(result);

    resultdisplay.classList.remove("good", "bad");

    switch (result) {
        case "YOU WIN!":
            resultdisplay.classList.add("good");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;

        case "YOU LOSE!":
            resultdisplay.classList.add("bad");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
    }

}