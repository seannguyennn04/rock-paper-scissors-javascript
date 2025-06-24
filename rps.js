//constant global variables
let humanScore = 0;

let computerScore = 0;

// global DOM variable 


const result = document.querySelector('#results')

const finalScore = document.createElement("p")
const humanScoreLog = document.createElement("p")
const computerScoreLog = document.createElement("p")

humanScoreLog.textContent = `Human Score: ${humanScore}`;
computerScoreLog.textContent = `Computer Score: ${computerScore}`;

result.appendChild(finalScore);
result.appendChild(humanScoreLog);
result.appendChild(computerScoreLog);




//these 2 functions  are going to create a random num that our function is going 

function randomNum(){
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor (3);

    return (Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled));
}

function getChoice(randomNum){
    
    if (randomNum === 0){
        return "rock"
    }
    else if(randomNum===1){
        return "paper"
    }
    else{
        return "scissors"
    }

}


function playRound(humanChoice, computerChoice){

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        console.log("it's a tie");
    } 
    else if ((humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors")){
        console.log("rock beats scissors")
        humanScore += 1;

    }
    else if ((humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper")){
        console.log("scissors beats paper");
        humanScore +=1;
    }
    else if ((humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock")){
        console.log("paper beats rock");
        humanScore +=1;
    }
    else{
        console.log("(the computer choice) " + computerChoice + " beats " + humanChoice) 
        computerScore +=1;
    }
    updateScore()


    if (humanScore === 5 || computerScore === 5) {
        finalScore.textContent = humanScore === 5 
            ? "🎉 You won the game!" 
            : "💻 Computer won the game!";
        disableButtons();
    }


}


//helper functions

function updateScore(){
    humanScoreLog.textContent = `Human Score: ${humanScore}`;
    computerScoreLog.textContent = `Computer Score: ${computerScore}`;
    result.appendChild(humanScoreLog);
    result.appendChild(computerScoreLog);
}


function disableButtons() {
    const btns = document.querySelectorAll("button");
    btns.forEach(button => button.disabled = true);
}


//this will call all the btns that we have selected

const btn = document.querySelectorAll("button")

btn.forEach((button) =>{
    button.addEventListener('click', () => {
        const humanChoice = button.id //we are setting our button ids as constants for our human choices
        const computerChoice = getChoice(randomNum())
        playRound(humanChoice, computerChoice)
    });
    
})




//retake a look at this in the future and implement new features