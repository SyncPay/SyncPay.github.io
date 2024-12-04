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

    // Chat box
    const responses = [
        {
            question1: { name: "Person 1", text: "România" },
            question2: { name: "Person 1", text: "Ion" },
            question3: { name: "Person 1", text: "Determinarea" },
        },
        {
            question1: { name: "Person 2", text: "Franța" },
            question2: { name: "Person 2", text: "Marie" },
            question3: { name: "Person 2", text: "Creativitatea" },
        },
        {
            question1: { name: "Person 3", text: "Germania" },
            question2: { name: "Person 3", text: "Hans" },
            question3: { name: "Person 3", text: "Punctualitatea" },
        },
    ];

    const questionElements = document.querySelectorAll(".chat-message");
    let currentIndexes = [0, 0, 0]; // Separate indexes for each question

    questionElements.forEach((messageElement, index) => {
        const nextButton = messageElement.querySelector(".arrow");
        const responseName = messageElement.querySelector(".response-name");
        const responseText = messageElement.querySelector(".response-text");

        nextButton.addEventListener("click", () => {
            currentIndexes[index] =
                (currentIndexes[index] + 1) % responses.length;

            const currentResponse = responses[currentIndexes[index]];

            if (index === 0) {
                responseName.textContent = currentResponse.question1.name;
                responseText.textContent = currentResponse.question1.text;
            } else if (index === 1) {
                responseName.textContent = currentResponse.question2.name;
                responseText.textContent = currentResponse.question2.text;
            } else if (index === 2) {
                responseName.textContent = currentResponse.question3.name;
                responseText.textContent = currentResponse.question3.text;
            }
        });
    });
});
