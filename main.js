document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once the animation is done
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the box is visible
    );

    boxes.forEach(box => observer.observe(box));
});