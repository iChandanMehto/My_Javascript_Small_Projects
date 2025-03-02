const quoteBtn = document.querySelector('#genQuote')
const quote = document.querySelector('#quote')

const ranQuote = [
    "The only limit to our realization of tomorrow is our doubts of today.  Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are.  Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success.  Albert Schweitzer",
    "Believe you can and you're halfway there.  Theodore Roosevelt",
    "Your time is limited, so don t waste it living someone else s life.  Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop.  Confucius",
    "Hardships often prepare ordinary people for an extraordinary destiny.  C.S. Lewis",
    "If you want to achieve greatness stop asking for permission.  Anonymous",
    "Dream big and dare to fail.  Norman Vaughan",
    "Don t let yesterday take up too much of today.  Will Rogers"
];


quoteBtn .addEventListener('click', function(){
let ranIndex = Math.floor(Math.random()  *ranQuote.length)

quote.textContent = ranQuote[ranIndex]
})

