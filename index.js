import {wordList} from "./word.js";

let guessWord, html ='', word, hintWord, junk = [], count = 1, tries = 5;
let yourWord = document.querySelector('.js-your-word');
let hint = document.querySelector('.js-hint');
let clickToPlay = document.getElementById('clickToPlay');
let playText = document.getElementById('playText');
let junkWords = document.querySelector('.junkWords');
let userTries = document.querySelector('.tries');
let main = document.getElementById('main');
let hangHead = document.getElementById('js-head')
let hangBody = document.getElementById('js-hangbody')
let hangleg1 = document.getElementById('js-hangleg1')
let hangleg2 = document.getElementById('js-hangleg2')
let restart = document.getElementById('restart')
let winmsg = document.getElementById('winmessage');

guessWord = Math.floor(Math.random() * wordList.length);
word = wordList[guessWord].word;

console.log(wordList.length)
const wordToGuess = () => {
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
  console.log(word.length)
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if(event.key === word[i]) {
      document.getElementById(`wordCell${i}`).textContent = `${word[i]}`;
      count++;
      found = true;
      if(count === word.length){
        winmsg.style.display = 'block';
        main.style.display = 'none';
        playText.innerText = '';
        restart.style.display = 'block';
        restart.addEventListener('click', ()=>{
          location.reload();
        })
      }
      break;
    }
  }
  if (!found) {
    if (!junk.includes(event.key)) {
      junk.push(event.key);
      junkWords.innerHTML = junk;
      userTries.innerHTML = `Tries:${tries--}`
      if(tries === 3){hangHead.style.display = 'block'}
      if(tries === 2){hangBody.style.display = 'block'}
      if(tries === 1){hangleg1.style.display = 'block'}
      if(tries === 0){hangleg2.style.display = 'block'}
      if(tries === -1){
        winmsg.style.display = 'block'
        winmsg.textContent = '!!!YOU GUESSED WRONG😐!!!'
        winmsg.style.color = 'red'
        main.style.display = 'none'
        playText.innerText = ''
        restart.style.display = 'block'
        restart.addEventListener('click', ()=>{
          location.reload();
        })
      }
    }
  }
 })
playText.innerText = 'Use Keyboard To Enter Words';
  
}
wordToGuess();

clickToPlay.addEventListener('click', ()=>{
  userInput();
})