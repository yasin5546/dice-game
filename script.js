//Getting the id and classes.....
let score0Num = document.querySelector('#score--0');
let score1Num = document.querySelector('#score--1');
let currentScore0Num = document.querySelector('#current--0');
let currentScore1Num = document.querySelector('#current--1');
let dice = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const diceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold'); 
const player0 = document.querySelector('.player--0'); 
const player1 = document.querySelector('.player--1'); 


let score, currentScore, activePlayer, playing;

//functions for the switching player

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};



    //initial process and new game button functions
const init = function(){

    currentScore0Num.textContent = 0;
    currentScore1Num.textContent = 0;
    score0Num.textContent = 0;
    score1Num.textContent = 0;
    dice.classList.add('hidden');
    

    //creating functions for the dice
     score = [0, 0];
     currentScore = 0;
     activePlayer = 0; 
     playing = true;
     player0.classList.remove('player--winner');
     player1.classList.remove('player--winner');
     player0.classList.add('player--active');
     player1.classList.remove('player--active');
    }
init();


diceBtn.addEventListener('click', function(){
    if(playing){
    let randNum = Math.trunc(Math.random() *6) +1;
    dice.classList.remove('hidden');
    dice.src = (`dice-${randNum}.png`);
    if(randNum!==1){
        //if the number is not 0 then the game will be played
        currentScore += randNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        //if the dice number is 1 it will switch the player
        switchPlayer();
    }

}
});

//the hold button functions


holdBtn.addEventListener('click', function(){
    if(playing){
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
     
        if(score[activePlayer]>=100){
            //if wins then finish the game
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        }
    else{ 
        //otherwise it will switch the player
        switchPlayer();
    }}
});

//new game button
newGameBtn.addEventListener('click', init);










