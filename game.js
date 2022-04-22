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

// Jan 4th - The next step here is to add event listener to each button element (perhaps look into querySelector all? 
// refer here: https://stackoverflow.com/questions/51573435/want-to-add-addeventlistener-on-multiple-elements-with-same-class


// Jan 6th attempting to use Event Delegation in order to select buttons from the outer node. 


//Adding an Event Listener to a Dynamically Created Element
//Event Delegation? 

function clearGrid(){
  const myButt = document.getElementById("1")
  
  myButt.addEventListener("click", function(e){
    console.log(e);
    const testingClear = document.querySelectorAll('.item')
    
    testingClear.forEach(item => {
      item.style.backgroundColor = "#FFFFFF";
    })
  })
}

function random_bg_color() {
  
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);

  return bgColor;
}

function RainbowMode() {
  
  const myGame = document.getElementById('grid');
  myGame.addEventListener("mouseover", function(e){
    const target = e.target; 

    if(target.matches(".item")){
        target.style.backgroundColor = random_bg_color();
    }
  });
};

function buttons(){
  const myButt = document.getElementById("1")
 
 myButt.addEventListener("click", function(e){
   console.log(e);
   const clearGrid = document.getElementsByClassName('item');
   clearGrid.style.backgroundColor = random_bg_color(); 
   })
};





RainbowMode();
clearGrid();