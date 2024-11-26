// script.js

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
    dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    dropdownBtn.classList.toggle("active");
});
