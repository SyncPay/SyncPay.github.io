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
            question1: {
                name: "Ruxandra, 21 ani, student UMFCD",
                text: "Chiriaș, locuiesc cu soțul meu.",
            },
            question2: {
                name: "Ruxandra, 21 ani, student UMFCD",
                text: "Nu sunt parte dintr-un grup oficial, dar discut cu vecinii.",
            },
            question3: {
                name: "Ruxandra, 21, student UMFCD",
                text: "Discut cu proprietarul și, ocazional, cu administratorul blocului.",
            },
            question4: {
                name: "Ruxandra, 21 ani, student UMFCD",
                text: "E greu să obțin sprijin din partea vecinilor mai în vârstă.",
            },
            question5: {
                name: "Ruxandra, 21 ani, student UMFCD",
                text: "Lipsa de comunicare este principala problemă.",
            },
            question6: {
                name: "Ruxandra, 21 ani, student UMFCD",
                text: "Îmi doresc mai multă implicare din partea autorităților.",
            },
        },
        {
            question1: {
                name: "Clara, 20 ani, studentă ASE",
                text: "Sunt prorpietar, împart apartamentul cu sora mea.",
            },
            question2: {
                name: "Clara, 20 ani, studentă ASE",
                text: "Nu, dar am auzit că se organizează întâlniri.",
            },
            question3: {
                name: "Clara, 20 ani, studentă ASE",
                text: "De obicei rezolvăm singure sau apelăm la un instalator.",
            },
            question4: {
                name: "Clara, 20 ani, studentă ASE",
                text: "Administratorul nu răspunde întotdeauna la timp.",
            },
            question5: {
                name: "Clara, 20 ani, studentă ASE",
                text: "E destul de dezorganizat, dar se rezolvă până la urmă.",
            },
            question6: {
                name: "Clara, 20 ani, studentă ASE",
                text: "Un grup pe WhatsApp ar fi util, dar autoritățile lipsesc.",
            },
        },
        {
            question1: {
                name: "Mihaela, 55 ani, profesor",
                text: "Proprietar, locuiesc aici de 20 de ani.",
            },
            question2: {
                name: "Mihaela, 55 ani, profesor",
                text: "Da, mă implic activ în discuțiile grupului.",
            },
            question3: {
                name: "Mihaela, 55 ani, profesor",
                text: "De obicei vorbesc cu administratorul blocului.",
            },
            question4: {
                name: "Mihaela, 55 ani, profesor",
                text: "Nu toți locatarii își asumă responsabilitatea.",
            },
            question5: {
                name: "Mihaela, 55 ani, profesor",
                text: "Se colaborează, dar sunt diferențe de opinii.",
            },
            question6: {
                name: "Mihaela, 55 ani, profesor",
                text: "Autoritățile trebuie să ofere răspunsuri rapide la sesizări.",
            },
        },
        {
            question1: {
                name: "Sabina, 26 ani, terapeut",
                text: "Sunt chiriașă, stau cu sora mea.",
            },
            question2: {
                name: "Sabina, 26 ani, terapeut",
                text: "Nu, dar comunicăm frecvent cu administratorul.",
            },
            question3: {
                name: "Sabina, 26 ani, terapeut",
                text: "Discutăm direct cu administratorul sau proprietarul.",
            },
            question4: {
                name: "Sabina, 26 ani, terapeut",
                text: "Unele probleme rămân nesoluționate din lipsă de interes.",
            },
            question5: {
                name: "Sabina, 26 ani, terapeut",
                text: "Se colaborează decent, dar sunt multe discuții în contradictoriu.",
            },
            question6: {
                name: "Sabina, 26 ani, terapeut",
                text: "O aplicație simplă ar ajuta la semnalarea problemelor.",
            },
        },
        {
            question1: {
                name: "Mugurel, 55 ani, pastor",
                text: "Sunt proprietar, locuiesc cu soția mea.",
            },
            question2: {
                name: "Mugurel, 55 ani, pastor",
                text: "Da, fac parte din grupul locatarilor.",
            },
            question3: {
                name: "Mugurel, 55 ani, pastor",
                text: "Discut cu vecinii mai întâi, apoi cu administratorul.",
            },
            question4: {
                name: "Mugurel, 55 ani, pastor",
                text: "Nu toți vecinii sunt receptivi la problemele comune.",
            },
            question5: {
                name: "Mugurel, 55 ani, pastor",
                text: "Este o colaborare minimă, dar necesară.",
            },
            question6: {
                name: "Mugurel, 55 ani, pastor",
                text: "Educația comunitară ar ajuta să ne coordonăm mai bine.",
            },
        },
        {
            question1: {
                name: "Victor, 23 ani, designer",
                text: "Sunt chiriaș, mai stau cu un băiat într-un apartament.",
            },
            question2: {
                name: "Victor, 23 ani, designer",
                text: "Nu, dar știu cine e responsabilul blocului.",
            },
            question3: {
                name: "Victor, 23 ani, designer",
                text: "Vorbesc cu administratorul sau chem pe cineva calificat.",
            },
            question4: {
                name: "Victor, 23 ani, designer",
                text: "Nu există o soluție clară pentru semnalarea problemelor.",
            },
            question5: {
                name: "Victor, 23 ani, designer",
                text: "Comunicarea e bună, dar nu suficientă.",
            },
            question6: {
                name: "Victor, 23 ani, designer",
                text: "O platformă digitală ar ajuta enorm să centralizăm sesizările.",
            },
        },
    ];

    const questionElements = document.querySelectorAll(".chat-message");
    let currentIndexes = [0, 0, 0, 0, 0, 0];

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
            } else if (index === 3) {
                responseName.textContent = currentResponse.question4.name;
                responseText.textContent = currentResponse.question4.text;
            } else if (index === 4) {
                responseName.textContent = currentResponse.question5.name;
                responseText.textContent = currentResponse.question5.text;
            } else if (index === 5) {
                responseName.textContent = currentResponse.question6.name;
                responseText.textContent = currentResponse.question6.text;
            } else if (index === 6) {
                responseName.textContent = currentResponse.question7.name;
                responseText.textContent = currentResponse.question7.text;
            } else if (index === 7) {
                responseName.textContent = currentResponse.question8.name;
                responseText.textContent = currentResponse.question8.text;
            } else if (index === 8) {
                responseName.textContent = currentResponse.question9.name;
                responseText.textContent = currentResponse.question9.text;
            } else if (index === 9) {
                responseName.textContent = currentResponse.question10.name;
                responseText.textContent = currentResponse.question10.text;
            }
        });
    });
});
