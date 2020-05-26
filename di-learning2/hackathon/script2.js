function allowDrop(event) {
	event.preventDefault();
}

let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");

square1.addEventListener("dragstart", dragStart);
square2.addEventListener("dragstart", dragStart);
square3.addEventListener("dragstart", dragStart);

square4.addEventListener("drop", drop);
square4.addEventListener("dragover", dragOver);
square4.addEventListener("dragenter", dragEnter);
square4.addEventListener("dragleave", dragLeave);

let dragSrcEl = null;

function dragStart(event) {
	event.dataTransfer.setData("text", event.target.id);
	event.target.style.opacity = "0.4";
	
}

function dragOver(event) {
	
	event.preventDefault();
	event.dataTransfer.dropEffect = 'copy';
} 


 function drop(event) {
 	event.preventDefault()
 	if (dragSrcEl != this) {
dragSrcEl.innerHTML = this.innerHTML;
this.innerHTML = event.dataTransfer.getData("text/html")
 	
   

 }
 return false;
}

  function dragEnter(event) {
 event.target.style.backgroundColor="#ccc";
	
	
 }

 function dragLeave (event) {
	event.target.style.backgroundColor="#ccc";

}