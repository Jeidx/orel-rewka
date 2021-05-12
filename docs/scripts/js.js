let orel = document.querySelector('.orel');
let reshka = document.querySelector('.reshka');
let bntStart = document.querySelector('.btn-start');


let arrValues = [0,1];


bntStart.onclick = function ran(){
    const randomNum = arrValues[Math.floor(Math.random()*arrValues.length)];
    if(randomNum === 0){
        orel.classList.add('active');
    }else if(randomNum === 1){
        reshka.classList.add('active');
    }
    function tester(){
        orel.classList.remove('active');
        reshka.classList.remove('active');
    }
    setTimeout(tester, 1000);

}








