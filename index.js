import {wordList} from "./word.js";

let guessWord, html ='', word, hintWord;
let yourWord = document.querySelector('.js-your-word');
let hint = document.querySelector('.js-hint');
let clickToPlay = document.getElementById('js-click-to-play');
let playText = document.getElementById('playText')

console.log(wordList.length)
const wordToGuess = () => {
  guessWord = Math.floor(Math.random() * wordList.length);
  word = wordList[guessWord].word;
  hint.innerHTML = `Hint: ${wordList[guessWord].hint}`
  hintWord = Math.floor(Math.random() * word.length);
  for(let i = 0; i < word.length; i++){
      html += `<div class="wordCell" id="wordCell${i}">${word[i]}</div>`;
      yourWord.innerHTML = html;    
   }
  for(let i = 0; i < word.length; i++){
    if(hintWord != i){
      document.getElementById(`wordCell${i}`).textContent = ''
    }
  }
  
}

const userInput = () => {
 document.addEventListener('keydown', event => {
  console.log(event.key)
 })
playText.style.display = 'block';
  
}
wordToGuess();

clickToPlay.addEventListener('click', ()=>{
  userInput()
})
  

