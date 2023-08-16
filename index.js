

const game = () => {
    let pScore = 0;
    let cScore = 0;

 //Start the game
const startGame = () => {

    const playBtn = document.querySelector ('.intro button');
    const introScreen = document.querySelector ('.intro');
    const match = document.querySelector ('.match');

    playBtn.addEventListener ('click', ()=> {
        introScreen.classList.add ('fadeOut');
        match.classList.add ('fadeIn');

    });
};
//Play Match
const playMatch = () => {

    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector ('.player-hand');
   const computerHand = document.querySelector ('.computer-hand');
   const hands=document.querySelectorAll('.hands img');

   //repet animation (shake)
    hands.forEach(hand =>{
       hand.addEventListener("animationend", function (){
        this.style.animation =""
       });  
    });

      //Computer options
   const computerOptions = ['rock' , 'paper' , 'scissors'];

   options.forEach(options =>{
    options.addEventListener("click" , function(){

        //The computer choise
        const computerNumber =Math.floor (Math.random() * 3);
        const computerChoise =computerOptions[computerNumber];
     
        setTimeout(() => {
       //Here will compare hands

     compareHands(this.textContent, computerChoise);
       //update Images
    playerHand.src=`./assets/${this.textContent}.png`
    computerHand.src=`./assets/${computerChoise}.png`
        }, 2000);

       //Animation
       playerHand.style.animation ="shakePlayer 2s ease";
       computerHand.style.animation="shakeComputer 2s ease";
   });
   });
   };
          //Update score
     const updateScore = () =>{
        const playerScore=document.querySelector('.player-score p');
        const computerScore=document.querySelector('.computer-score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
     };

   const compareHands=(computerChoise, playerChoise) =>{
      //Update Text 
      const winner=document.querySelector('.winner');
      //If it is a tie 
      if(playerChoise===computerChoise){
        winner.textContent='It is a tie!';
        pScore++;
        cScore++;
        updateScore();
        return;
      }
      //If it is rock 
       if(playerChoise=== 'rock'){
          if(computerChoise==='scissors'){
          winner.textContent='Computer wins!'
          cScore++;
          updateScore();
         return;
    }else {
        winner.textContent='Player wins!'
        pScore++;
        updateScore();
        return;
    }
     }
     //If it is paper
     if(playerChoise==='paper'){
        if (computerChoise==='rock'){
            winner.textContent='Computer wins!'
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent='Player wins!'
            pScore++;
            updateScore();
            return;
        }
     }
     //if are scissors
     if(playerChoise==='scissors'){
        if(computerChoise==='paper'){
            winner.textContent='Computer wins!'
            cScore++
            updateScore();
            return;
        }else{
            winner.textContent='Player wins!'
            pScore++;
            updateScore();
            return;
        }
     }
   };


//it call all the inner function
startGame ();
playMatch();

};
 game();
