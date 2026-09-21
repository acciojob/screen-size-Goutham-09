const size = document.getElementById("size");
const heading = document.querySelector("#size");

        function displaySize() {
            heading.textContent =
                `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
        }

        // Display size immediately when page loads
        displaySize();

        function updateSize() {
            size.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
        }

       
        updateSize();

       
        window.addEventListener("resize", updateSize);