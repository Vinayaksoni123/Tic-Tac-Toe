let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgambtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

let arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetgame = ()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
            // box.Disabled=true;
        }else{
            box.innerText="x";
            turn0=true;
            // box.Disabled=true;
        }
        box.disabled=true;
       checkbox();
    });
});
const disableboxes = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableboxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
}
const showwinner = (winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkbox=()=>{
    for(let pettern of arr){
        let pos1=boxes[pettern[0]].innerText;
        let pos2=boxes[pettern[1]].innerText;
        let pos3=boxes[pettern[2]].innerText;

        if(pos1!="" &&pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
            }
        }
    }
}

newgambtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

