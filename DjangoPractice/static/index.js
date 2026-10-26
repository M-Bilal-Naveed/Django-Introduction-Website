
document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the mobile menu after selecting a link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // Automatically update the copyright year
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

    // Interactive welcome button
    const welcomeBtn = document.getElementById("welcomeBtn");
    const welcomeMessage = document.getElementById("welcomeMessage");

    welcomeBtn.addEventListener("click", () => {
        welcomeMessage.textContent =
            "Hello, developer! Happy coding with Django! 🚀";
    });
});
