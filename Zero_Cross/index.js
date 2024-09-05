console.log("hello");
var turn="X";
var click=new Audio("./audio/click.wav")
var winner=new Audio("./audio/winning.wav")
let gameover=false;

// trun change
 var change=()=>{
   return turn=="X"?"0":"X";
 }


// winning logic

var winthegame=()=>{
var box1=document.getElementsByClassName("x");
    let winth=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winth.forEach((e)=>{
        // if(box[e[0]].innerText==)
        if((box1[e[0]].innerText===box1[e[1]].innerText) && (box1[e[1]].innerText===box1[e[2]].innerText) && (box1[e[0]].innerText!=="")){
            document.getElementById("info").innerText= box1[e[0]].innerHTML+" Winn";
            
            winner.play();
            document.getElementsByClassName("gif")[0].getElementsByTagName("img")[0].style="width:160px ;padding-top:20px";
           gameover=true;
         
           
        }
        
         
    
    })
    
}
// winthegame();


// game logic
var gridbox=document.getElementsByClassName("grid-item");
Array.from(gridbox).forEach((ele)=>{
    let box2=ele.getElementsByClassName("x")[0];
   
       
    ele.addEventListener("click",()=>{
       if(box2.innerText ===""){
        box2.innerText=turn;
        turn=change();
       click.play()
      winthegame()
     
       if(!gameover){
        document.getElementById("info").innerText="Turn for "+turn;
       }
    
    }
       
    })
})
// console.log(gridbox);




// reset th egame
var reset=document.getElementById("reset");
console.log(reset);
reset.addEventListener("click",()=>{
   var ans=confirm("You want to reset the game")
    if(ans==true){
        let boxdata=document.getElementsByClassName("x");
    Array.from(boxdata).forEach(e=>{
        e.innerHTML="" ;
        location.reload();
    })
    }
})