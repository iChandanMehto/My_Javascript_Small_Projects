const countpara = document.querySelector('#counterId')
const plusbtn = document.querySelector('#Incrementbtn')
const minusbtn = document.querySelector('#Decrementbtn')

let countNum = 0;
function countFun(){
    countpara.textContent = countNum;
}



plusbtn.addEventListener('click', ()=>{
    countNum++;
    countFun();
})

minusbtn.addEventListener('click', ()=>{
    countNum--;
    countFun();
})

countFun();




