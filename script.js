// script.js

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const scrollToTopButton = document.querySelector("#to-top button");

    dropdownBtn.addEventListener("click", () => {
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
        dropdownBtn.classList.toggle("active");
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
