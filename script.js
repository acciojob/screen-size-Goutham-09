const size = document.getElementById("size");

        function updateSize() {
            size.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
        }

       
        updateSize();

       
        window.addEventListener("resize", updateSize);