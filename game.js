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

function setToBlack() {
  const blackButton = document.getElementById("2")
    blackButton.addEventListener("click", function(e){
      changetoBlack();
  })
}

function changetoBlack(){
  
  const testingBlackButton = document.getElementById("grid")
  testingBlackButton.addEventListener("mouseover", function(e){
    const target = e.target;

    if(target.matches('.item')){
      target.style.backgroundColor = "#000000"
    }
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

function setToRainbow() {
  
  const rainbowButton = document.getElementById("3")
    rainbowButton.addEventListener("click", function(e){
      changetoRainbow();
  })
}

function changetoRainbow(){
  const testingRainbowButton = document.getElementById("grid")
  testingRainbowButton.addEventListener("mouseover", function(e){
    const target = e.target;

    if(target.matches('.item')){
      target.style.backgroundColor = random_bg_color();
    }
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








clearGrid();
setToRainbow();
setToBlack();