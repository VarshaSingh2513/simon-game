let Gameseq=[];
let userseq=[];
 let btns=["pink","blue","Dblue","yellow"];
let started=false;
let level=0;

let btn=document.querySelector("button");

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
    started=true;
     Levelup();
  }
});
function Gameflash(btn){
    btn.classList.add("Gameflash");
    setTimeout(function(){
      btn.classList.remove("Gameflash");
    },260)
}
function Userflash(btn){
    btn.classList.add("Userflash");
    setTimeout(function(){
      btn.classList.remove("Userflash");
    },260)
}

function Levelup(){
  userseq=[];
  level++;
   h2.innerText=`Level ${level}`;
   let randInx=Math.floor(Math.random()*4);
   let randColour=btns[randInx];
   let randbtn=document.querySelector(`#${randColour}`);
    Gameseq.push(randColour);
    console.log(Gameseq);
  
   Gameflash(randbtn);
}

function Check(index){
 
  if(userseq[index] === Gameseq[index]){
   if(userseq.length==Gameseq.length){
    setTimeout(Levelup,1000);
   }
  }else{
       h2.innerHTML=`Game Over! Your Score was <b>${level}<b><br>Press Any key to Start`;  
       reset();
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150)
  }
}
function Btnpress(){
 console.log(this);
 let btn=this;
 Userflash(btn);
 usercolour=btn.getAttribute("id");
 userseq.push(usercolour);
 Check(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",Btnpress);
}
function reset(){
  started=false;
  Gameseq=[];
  userseq=[];
  level=0;
}
