var timer = 15;
var score = 0;
var hitNum = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

// find random hit value 
function getnewHit(){
    hitNum = Math.floor(Math.random() * 10);
    document.getElementById('newhit').textContent = hitNum;
}

getnewHit();

// function for make bubble 
function makeBubble() {
  var current = "";

  for (let i = 1; i <= 102; i++) {
    let value = Math.floor(Math.random() * 10);
    current += `<div class="bubble">${value}</div>`;
  }

  document.getElementById("pbtm").innerHTML = current;
}

// function for time for 1 minute we can reset any time 
function runTimer()
{
    var timeInt =  setInterval(function(){
        if(timer>0){
            timer--;
            document.getElementById('timeValue').textContent = timer;
            // document.getElementById('timeValue').style.color='white';
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    // alert("char rha hain");
    // console.log(details.target.textContent);
    var bubNum =  Number(details.target.textContent);

    if(bubNum === hitNum)
    {
        increaseScore();
        getnewHit();
        makeBubble();
    }

})

runTimer();
makeBubble();

