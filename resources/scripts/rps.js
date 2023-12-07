let userMove='';
computerMove='';
console.log(computerMove);
let result='';
function play(){
    generate_Computer_move(); 
    evaluateMoves(); 
    updateGameScore();
    showsummary()
}
const game={
    wins:0,
    loses:0,
    ties:0,
};

function caputureUserMove(usermove){
    userMove=usermove;
}

function generate_Computer_move(){
    const C = ["rock", "paper", "scissors"];
    let ch=(Math.floor(Math.random() * 10)%3);
    computerMove= C[ch];
}

function evaluateMoves(){
    if(userMove === computerMove){
        result='tie';
    }
    else if((userMove==='rock' && computerMove==='scissors')||(userMove==='paper' && computerMove==='rock')||(userMove==='scissor' && computerMove==='paper')){
        result='win';
    }
    else
    {
        result='lose';
    }

}
function updateGameScore(){
    if (result==='win')
    {
        game.wins++;
        
    }
    else if (result==='lose')
    {
        game.loses++;
    }
    else{
        game.ties++;
    }
}
function showsummary(){
    const gameplayed=game.wins+game.loses+game.ties;
    // console.log(`userMove:  ${userMove} \ncomputerMove: ${computerMove} \nresult:  ${result} \ngameplayed: ${gameplayed}`);
    // alert(`userMove:  ${userMove} \ncomputerMove: ${computerMove} \n RESULT:  ${result}`);  
    document.getElementById('wins').innerHTML=game.wins;
    
    document.getElementById('loses').innerHTML=game.loses;
    
    document.getElementById('ties').innerHTML=game.ties;
    
    document.getElementById('games_played').innerHTML=gameplayed;

    console.log(game);
}