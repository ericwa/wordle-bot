// const util = require('util');
// console.log(util.inspect(Array, { maxArrayLength: null }));

const { createWordList } = require('./createWordArray');
const { compareWords} = require("./initialBlockUpdate");


let wordList = createWordList();
let guess = 'smart';
let answer = 'alert';
// let answer = wordList[Math.floor(Math.random() * wordList.length)];
let valBlock = compareWords(guess, answer);

compareWords(guess, answer);

  const bot = {
    char: [],
    val: valBlock,
    pos: [],
    yellowLetters: []
  };

function updateBot() {
  //after comparing first guess against answer
  for (let i = 0; i < answer.length; i++) {
    //for testing, assign length to bot.pos
    bot.pos.push(i);
    //push yellow letters to array for reference
    if (bot.val[i] === 1) {
      bot.yellowLetters.push(guess[i]);
    }
  }
  // console.log("assign bot.pos", bot);

  //get green letters in right pos
  for (let i = 0; i < answer.length; i++) {
    if (bot.val[i] === 2) {
      bot.char[i] = answer[i];
    } else {
      bot.char[i] = '?';
    }
  }
  console.log("info after initial comparison", bot);
  return bot;
};

updateBot();

function updateWordList(wordList) {
  
};