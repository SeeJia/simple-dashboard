document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".animated-number");
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            
            // Adjust speed by modifying increment
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 2); // Adjust delay for smoothness
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});