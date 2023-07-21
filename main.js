// Minimum Requirements
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.

// const player1;
// const player2;
let turnsPlayed = 0;


const winningPossibilities = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

let currentTurn = 1;
let winner = null;

const board = 
[
   { 
    available: true,
    marker: null,
    index: 0
   },
   { 
    available: true,
    marker: null,
    index: 1
   },
   { 
    available: true,
    marker: null,
    index: 2
   }, 
   { 
    available: true,
    marker: null,
    index: 3
   },
   { 
    available: true,
    marker: null,
    index: 4
   },
   { 
    available: true,
    marker: null,
    index: 5
   },
   { 
    available: true,
    marker: null,
    index: 6
   },
   { 
    available: true,
    marker: null,
    index: 7
   },
   { 
    available: true,
    marker: null,
    index: 8
   } 

]

function clickHandler(evt){
    evt.preventDefault();
const clickedButton = evt.target.id ; 
if(board[clickedButton].available === false || winner !== null){
return
} else {
    board[clickedButton].available = false;
    board[clickedButton].marker = currentTurn;
    console.log(clickedButton)   
    if (currentTurn === 1){
        evt.target.textContent = "X";
        evt.target.classList.add("btn-outline-danger")
    } else {
        evt.target.innerText = "O";
        evt.target.classList.add("btn-outline-success")
    }
}
currentTurn = currentTurn * -1
if (currentTurn === 1){
    spanTag.innerText = "player 1";
} else {
    spanTag.innerText = "player 2";
}
turnsPlayed++
if (turnsPlayed > 4){
winningPossibilities.forEach((possibility)=> {
    if (winner === null){
        let total = 0;
        possibility.forEach((element)=>{
            total= total + board[element].marker 
        })
        if (total === 3){
            winner = "Player 1";
            console.log("player 1 wins")
        } else if (total === -3) {
            winner = "Player 2"
            console.log("player 2 wins")
        }
    }
})
}
if (turnsPlayed === 9 && winner === null) {
winner = "Tie";
console.log("It's a tie")
}
let gameStatusText = document.getElementById("winner-text");
if (winner === "Player 1"){
gameStatusText.innerText = "Player 1 wins"
spanTag.innerText = "-";
} else if (winner === "Player 2") {
    gameStatusText.innerText = "Player 2 wins"
    spanTag.innerText = "-";
} else if (winner === "Tie"){
    gameStatusText.innerText = "It's a tie"
    spanTag.innerText = "-";
}

}
board.forEach((element)=> {
    let btn = document.getElementById(element.index)
    btn.addEventListener("click", clickHandler)
})
 let spanTag = document.getElementById("current-Turn");
 spanTag.innerText = "player 1";
let gameStatusText = document.getElementById("winner-text");
gameStatusText.innerText = "Game in progress";

let resetBtn = document.getElementById("reset")

function resetHandler(){
    board.forEach((element)=> {
        let btn = document.getElementById(element.index)
        element.available = true;
        element.marker = null;
        btn.innerText = "...";
        btn.classList.remove("btn-outline-danger")
        btn.classList.remove("btn-outline-success")
    })
    gameStatusText.innerText = "Game in progress";
    turnsPlayed = 0
    currentTurn = 1;
    spanTag.innerText = "player 1";
    
    winner = null;
}

resetBtn.addEventListener("click", resetHandler)