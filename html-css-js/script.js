let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false; 
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp() {
    userSeq = []; //as soon as one level gets completed, user has to enter the complete sequence from starting
    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let randIdx = Math.floor(Math.random() *3 );
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level= ",level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp,1000); //in case same button flashed up , we wont able to see it , so provide 1 sec delay
        }
    } else{
        h2.innerText = `Game over! Your Score was: ${level} Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}



function btnPress(){
    // console.log("btn was pressed");
    let btn = this; // conatins the button which is pressed by user
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}