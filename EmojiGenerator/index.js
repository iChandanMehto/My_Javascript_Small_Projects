const emoBtn = document.querySelector('#emoBtn')
const emojis = document.querySelector('#emo')

let emoArray =[
    "😀", "😂", "🥰", "😎", "🤩", "😜", "🤔", "😴", "🤯", "🥳", 
    "😭", "😡", "🤖", "👽", "👻", "🎃", "💀", "🔥", "🌈", "⭐", 
    "⚡", "🌍", "🚀", "🎉", "🎵", "🎮", "🍕", "🍔", "🍩", "☕",
    "🏆", "⚽", "🏀", "🎸", "🎭", "💡", "🔑", "📱", "🖥️", "💻"
];

emoBtn.addEventListener('click', function(){
let ranEmo = Math.floor(Math.random()* emoArray.length)  ;
emojis.textContent = emoArray[ranEmo];
})
