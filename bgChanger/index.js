
const blueBtn = document.querySelector('#blue')
const orangeBtn = document.querySelector('#orangeRed')
const greenBtn  = document.querySelector('#green')


blueBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
    defaultBtn()
})

orangeBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'orangered'
    defaultBtn()
})

greenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
    defaultBtn()
    
})

function defaultBtn(){
    setTimeout(() => {
        document.body.style.backgroundColor = '#1a1a1a'
    }, 3000);
}


