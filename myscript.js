let player_count=0
let computer_count=0
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', ()=> {
        playRound(button.id, getComputerChoice())
    })
})

const results = document.querySelector('.result')
const player = document.querySelector('#player_choice')
const computer = document.querySelector('#computer_choice')
const winner = document.querySelector('#winner')

results.appendChild(player);
results.appendChild(computer);
results.appendChild(winner);

const box_score = document.querySelector('.box_score')
const my_score = document.querySelector('#player_box')
const computer_score = document.querySelector('#computer_box')

box_score.appendChild(my_score);
box_score.appendChild(computer_score);

function getComputerChoice(){
    let items = Array("ROCK","PAPER","SCISSORS")
    let computer_move = items[Math.floor(Math.random()*items.length)]
    return computer_move
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    RoundWinner = ""
        if (playerSelection === computerSelection ){
            RoundWinner = "It's a draw ! "
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection +"<br />";
            winner.innerHTML = RoundWinner;
            
                                    
        }
        else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            RoundWinner = "Computer wins"
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection+"<br />";
            winner.innerHTML = RoundWinner;
        }
        else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            RoundWinner = "Player wins"
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection+"<br />"
            winner.innerHTML = RoundWinner; 
        }
        else if  (playerSelection === "PAPER" && computerSelection === "ROCK"){
            RoundWinner = "Player wins"
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection+"<br />"
            winner.innerHTML = RoundWinner;
        }
        else if  (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            RoundWinner = "Computer wins"
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection +"<br />"
            winner.innerHTML = RoundWinner;

        }
        else if  (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            RoundWinner = "Player wins"
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection +"<br />"
            winner.innerHTML = RoundWinner;
        }
        else if  (playerSelection === "ROCK" && computerSelection === "PAPER"){
            RoundWinner = "Computer wins"
            player.innerHTML = "Player: "+playerSelection+"<br />"
            computer.innerHTML = "Computer : "+computerSelection +"<br />"
            winner.innerHTML = RoundWinner;
        }
        return RoundWinner
}