const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');
const message = document.getElementById('message');
const quotes = [
   'Be yourself; everyone else is already taken.',
   'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
   'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
   'So many books, so little time',
   'A room without books is like a body without a soul.',
   'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.'
]

let wordQueue;
let highlightPosition;
let startTime;

function startGame() {
   console.log("Game started!");
   // get random quote index and set it
   const quoteIndex = Math.floor(Math.random() * quotes.length);
   const quoteText = quotes[quoteIndex];
   
   wordQueue = quoteText.split(' ');
   quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

   highlightPosition = 0;
   quote.childNodes[highlightPosition].className = 'highlight'; 
   startTime = new Date().getTime();
   console.log(startTime)

   document.body.className = "";
   start.className = "started";
   message.innerHTML = "";
   setTimeout(() => {start.className ="button";}, 2000)

}
start.addEventListener('click', startGame);

function checkInput() { 
   // debugger;
   //  console.log("Checking", input.value);
    const currentWord = wordQueue[0].replaceAll(".", "").replaceAll(",", "");
    const typedValue = input.value.trim();
    if (currentWord !== typedValue){
      input.className = currentWord.startsWith(typedValue) ? "" : "error";
      return;
    }
    wordQueue.shift() // 
    input.value = ""; //empty textbox

    quote.childNodes[highlightPosition].className = "";
    if (wordQueue.length === 0) {
      gameOver();
      return;
    }
    highlightPosition++;                           
    quote.childNodes[highlightPosition].className = 'highlight'; 
 
 }

input.addEventListener('input', checkInput);

function gameOver(){
   console.log("Game over");
   const elapsedTime = new Date().getTime() - startTime;
   document.body.className = "winner";
   message.innerHTML = `<span class="congrats">Congratulations!</span><br>
   <p class="time">You finished in ${elapsedTime / 1000} seconds </p>`;
}