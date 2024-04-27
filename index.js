import {wordList} from "./word.js";

let guessWord, html ='';
let yourWord = document.querySelector('.js-your-word');


const wordToGuess = () => {
  guessWord = Math.floor(Math.random() * 48);
  const word = wordList[guessWord].word;
  console.log(word, word.length);

  for(let i = 0; i < word.length; i++){
     html = html + `<div class="wordCell"></div>`    
  }
  yourWord.innerHTML = html;
  console.log(html)
}
wordToGuess();