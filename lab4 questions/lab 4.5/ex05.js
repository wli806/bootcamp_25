window.addEventListener("load", function() {
    const baubles = document.querySelectorAll(".bauble");

    baubles.forEach(bauble => {
        bauble.addEventListener("click", function() {
            this.classList.toggle("animated"); 
        });
    });
});
