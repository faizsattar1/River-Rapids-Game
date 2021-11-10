"use strict"
var audio = new Audio('bensound-goinghigher.mp3');
//audio.play();
let x=47 //HORIZONTAL POSITION OF THE BOAT

let boat=document.getElementById("boat")//HAVE TO ASSIGN ID IN HTML

function moveBoat(step){ //FUNCTION TO MOVE BOAT FORWARDS
    x+=step
    boat.style.left=x + "%"
}




function keyPressed (e){ //FUNCTION SO IF RIGHT ARROW KEY IS PRESSED INVOKE MOVE BOAT FUNCTION
    if (e.key=="ArrowRight"){
        moveBoat(1.6)
    }
    else if(e.key=="ArrowLeft"){
        moveBoat(-1.6)
    }
}
let r=0
let rocks=[]
let rocksTop=[]
let rocksLeft=[]
let river=document.getElementById("river")
function makeRock(){
    let rock=document.createElement("object")
    rock.data="iceberg-svgrepo-com.svg"
    rock.type="image/svg+xml"
    rock.classList.add("rock")
    river.appendChild(rock)
    rocks.push(rock)
    rocksTop.push(0)
    rocksLeft.push(Math.random()*100)
    rock.style.left=rocksLeft.slice(-1)+ "%"
    //randomize rockstop
}


function moveRocks(step){
    for (let i=0; i<rocks.length;i++){
        rocksTop[i]+=step
        if(rocksTop[i] > 100){
          rocksTop[i]=Math.random()*30//randomzies x position for rock
          rocksLeft[i]=Math.random()*100 + "%"
        }
        rocks[i].style.top=rocksTop[i] + "%"
        
        //if(rocksTop[i]>boat.outerWidth && rocksLeft[i] + rocksTop[i]>"boat" (outerHeight){
        if(rocksTop[i]>82){// && rocksLeft[i] + rocksTop[i]>"boat" (outerHeight){
            //ddalert(rocksLeft[i]+ " "+x )
            
            if(rocksLeft[i]>x && rocksLeft[i]<x+10){
                console.log(" hit "+rocksLeft[i]+ " "+x)    
            }
        }


        //if this rock is at the bottom of the screen
        // and if its horizontally aligned with the boat
        //then lose a life
        
    }
    
}


function rockStep(){
    moveRocks(1.7)
}

function startGame(){
    document.body.addEventListener("keydown",keyPressed)
    makeRock()
    makeRock()
    makeRock()
    makeRock()
    makeRock()
    makeRock()
    setInterval(rockStep,40)
    
}
















