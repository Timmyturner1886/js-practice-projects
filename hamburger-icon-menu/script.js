const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");

    if (navLinks.classList.contains("show")) {
        hamburger.innerHTML = "✕"; // Change to 'X' icon
    } else {
        hamburger.innerHTML = "☰"; // Change back to hamburger icon
    }
});
