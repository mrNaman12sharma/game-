let boxes=document.querySelectorAll(".box");
let resets= document.querySelector("#reset-game");
let newgame= document.querySelector("#new-game");
let msgcontain= document.querySelector(".msg-contain");
let msg=document.querySelector("#msg");
let  turnO = true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () =>{
    turnO=true;
    enablebtn();
    msgcontain.classList.add("hide");
    document.body.style.backgroundColor="rgb(126, 184, 145)";
}


boxes.forEach((box)=>  {
    box.addEventListener("click",() =>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
   box.disabled=true;   
    Winner();
});
});
const Disablebtn=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}  
const enablebtn=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}  
const ShowWinner=(winner)  =>{
    msg.innerText=`Winner Is ${winner}`;
    msgcontain.classList.remove("hide");
    document.body.style.backgroundColor="orange";
    Disablebtn();
}
const Winner=()=>{
    for(let pattern of winpattern){
         let val=boxes[pattern[0]].innerText;
         let val2=boxes[pattern[1]].innerText;
         let val3=boxes[pattern[2]].innerText;
    
    if(val !="" && val2 != "" && val3 !=""){
        if(val===val2 && val2 === val3){
            console.log("Winner",val);
            ShowWinner(val);
        }
    }
}
};
resets.addEventListener("click",reset);
newgame.addEventListener("click",reset);