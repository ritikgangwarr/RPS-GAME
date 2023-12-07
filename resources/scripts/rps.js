let userMove='';
computerMove='';
console.log(computerMove);
let result='';
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
function showsummary(){
    console.log(`userMove:  ${userMove} computerMove: ${computerMove} result:  ${result}`);   
}