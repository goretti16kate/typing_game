const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let wordQueue;
let highlightPosition;

function startGame() {
   console.log("Game started!");
   
   let quoteText = "K4713 is an amazing human being";
   wordQueue = quoteText.split(' ');
   quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

   highlightPosition = 0;
   quote.childNodes[highlightPosition].className = 'highlight'; 

   // quote.childNodes[highlightPosition].className = "";  
   // highlightPosition++;                           
   // quote.childNodes[highlightPosition].className = 'highlight'; 
   // // wordQueue = "Katie";
   // quote.innerHTML = `<span>${wordQueue}</span>`;
}
start.addEventListener('click', startGame);

function checkInput() { 
   // debugger;
   //  console.log("Checking", input.value);
    const currentWord = wordQueue[0];
    const typedValue = input.value.trim();
    if (currentWord !== typedValue){
      input.className = currentWord.startsWith(typedValue) ? "" : "error";
      return;
    }
    wordQueue.shift() // 
    input.value = ""; //empty textbox

    quote.childNodes[highlightPosition].className = "";  
    highlightPosition++;                           
    quote.childNodes[highlightPosition].className = 'highlight'; 
 
 }

input.addEventListener('input', checkInput);