
window.onload = function addDiv(){
    
    for(let i = 0; i < 6; i++){
    const newDiv = document.createElement("div");
    newDiv.className = 'flex-item';
    
    const container = document.getElementById('flex');
    container.appendChild(newDiv);
    }
}
