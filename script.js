//your JS code here. If required.
//your JS code here. If required.
sizeInfo = document.getElementById("sizeInfo").children[0]

function updateSize(){
	sizeInfo.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}

window.addEventListener("resize",updateSize)
updateSize()


