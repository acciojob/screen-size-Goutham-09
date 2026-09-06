const sizeInfo = document.getElementById("sizeInfo");
const heading = sizeInfo.querySelector("h1");

function updateSize() {
    heading.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

window.addEventListener("resize", updateSize);

updateSize();