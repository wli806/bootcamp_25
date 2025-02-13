window.addEventListener("load", function() {
    const baubles = document.querySelectorAll(".bauble");

    for (let i = 0; i < baubles.length; i++) {
        baubles[i].addEventListener("click", function() {
            this.classList.toggle("animated");
        });
    }
});
