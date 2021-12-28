window.onload = function addDiv(){
    
    for(let i = 0; i < 64; i++){
        //Parent - found in the index html 
        const container = document.getElementById('grid');
        
        //Child element
        const newDiv = document.createElement("div");
        newDiv.className = 'item';
        container.appendChild(newDiv);
    }
}

//Adding an Event Listener to a Dynamically Created Element
//Event Delegation? 
function random_bg_color() {
  
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);

  return bgColor;
}

function createEventListener() {
  
  const myGame = document.getElementById('grid');
  myGame.addEventListener("mouseover", function(e){
    const target = e.target; 

    if(target.matches("div")){
        target.style.backgroundColor = random_bg_color();;
    }
  });
};

createEventListener();

