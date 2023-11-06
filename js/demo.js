document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    function checkScroll() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < window.innerHeight) {
                box.classList.add(box.getAttribute("data-animate"));
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});