document.addEventListener("DOMContentLoaded", function(){
createBoard(16);
} )

function createBoard(size){
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}