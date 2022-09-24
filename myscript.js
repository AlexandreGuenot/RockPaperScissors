function getComputerChoice(){
    let items = Array("rock","paper","scissors")
    let computer_move = items[Math.floor(Math.random()*items.length)]
    return computer_move
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    RoundWinner = ""
        if (playerSelection === computerSelection ){
            RoundWinner = "It's a draw ! "
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " It's a draw !")
        }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            RoundWinner = "Computer wins"
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " Computer wins")
        }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            RoundWinner = "Player wins"
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " Player wins")
        }
        else if  (playerSelection === "paper" && computerSelection === "rock"){
            RoundWinner = "Player wins"
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " Player wins")
        }
        else if  (playerSelection === "paper" && computerSelection === "scissors"){
            RoundWinner = "Computer wins"
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " Computer wins")
        }
        else if  (playerSelection === "rock" && computerSelection === "scissors"){
            RoundWinner = "Player wins"
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " Player wins")
        }
        else if  (playerSelection === "rock" && computerSelection === "paper"){
            RoundWinner = "Computer wins"
            console.log("Player: ",playerSelection, " ", "Computer : ",computerSelection + " Computer wins")
        }
        return RoundWinner
    }
   
function game(){
    let player_count=0
    let computer_count=0
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>{
        button.addEventListener('click', ()=> {
            playRound(button.id, getComputerChoice())
        })
    })
    /*for (let i = 0; i<5;i++){
        playerSelection = prompt("Rock, Paper, Scissors : ")
        computerSelection = getComputerChoice()
        RoundWinner = playRound(playerSelection, computerSelection)
        console.log("Round "+(i+1) + " : "+RoundWinner)
        if(RoundWinner === "Player wins"){
            player_count = player_count+1
            console.log("Player : "+ player_count +" Computer :  " + computer_count)
        }
        else if(RoundWinner === "Computer wins"){
            computer_count = computer_count+1
            console.log("Player : "+ player_count +" Computer :  " + computer_count)
        }
        else{
            console.log("Player : "+ player_count +" Computer :  " + computer_count)
        }
    }
    if(player_count > computer_count){
        console.log("The player wins the Game ! ")
    }
    else if(player_count < computer_count){
        console.log("The Computer Wins the Game :( ")
    }
    else{
        console.log("It's a draw ")
    }*/
}

game()