/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};


/*---------------------------- Variables (state) ----------------------------*/
let timer;  // used to store the timer for the game
let gameOver; //used to present if the player has lost the game or not


/*------------------------ Cached Element References ------------------------*/
const boredomStateEl = document.getElementById('boredom-stat'); //connects to the id in the game date section
const hungerStateEl = document.getElementById('hunger-stat'); //connects to the id in the game date section
const sleepinessStateEl = document.getElementById('sleepiness-stat'); //connects to the id in the game date section
console.log(boredomStateEl);
console.log(hungerStateEl);
console.log(sleepinessStateEl);

const playBtnEl = document.getElementById('play'); //connects to the id in the game interface section
const feedBtnEl = document.getElementById('feed'); //connects to the id in the game interface section
const sleepBtnEl = document.getElementById('sleep'); //connects to the id in the game interface section
console.log(playBtnEl);
console.log(feedBtnEl);
console.log(sleepBtnEl);

const gameMessageEl = document.getElementById('message'); //connects to the id in the game display section
console.log(gameMessageEl);

const resetBtnEl = document.getElementById('restart') //connects to the id in the game display section
console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/
function init (){
    resetBtnEl.classList.add('hidden')
    gameMessageEl.classList.add('hidden')
    state.boredom = 0
    state.hunger= 0;
    state.sleepiness= 0;
    gameOver = false;
    timer = setInterval(runGame,2000);
    console.log("Let's Play!");
    render();
};
// Call the init function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

function runGame (){
    updatestates(); // Invoke updateStates() to update the game state
    checkGameOver();
    render(); // Invoke render() to reflect the updated state in the UI
};
console.log();

function render(){
    boredomStateEl.textContent = state.boredom;
    hungerStateEl.textContent = state.hunger;
    sleepinessStateEl.textContent = state.sleepiness;
    if (gameOver){
        clearInterval(timer);
        resetBtnEl.classList.remove('hidden')
        gameMessageEl.classList.remove('hidden')
    };
};

function updatestates(){
    state.boredom += Math.floor(Math.random()*4);
    state.hunger += Math.floor(Math.random()*4);
    state.sleepiness += Math.floor(Math.random()*4);
};
console.log(updatestates);

function checkGameOver(){
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10)
        gameOver = true;
};
console.log(checkGameOver);

function playBtnClick () {
    state.boredom = 0;
    render();
};

function feedBtnClick () {
    state.hunger = 0;
    render();
};

function sleepBtnClick () {
    state.sleepiness = 0;
    render();
};
/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', init);
// how to make DRYER with addeventlistener all
// console.log(playBtnEl);