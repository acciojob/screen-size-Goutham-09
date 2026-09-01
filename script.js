//your JS code here. If required.
//your JS code here. If required.
sizeInfo = document.getElementById("sizeInfo").children[0]

window.addEventListener("resize",function updatesize() {
	sizeInfo.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
})
updatesize()

