
//display the current year
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


//Hamburger button
const mainnav = document.querySelector(".navigation")

const hamButton = document.querySelector("#hamburgerBtn");


hamButton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hamButton.classList.toggle('open');

});




// LESSONS DATA
const lessons = [
    {
        title: "El primer día en la clase de español",
        level: "A1",
        category: "Communication",
        description: "Activities and ideas for breaking the ice and taking the first steps in the classroom.",
        url: "https://arche-ele.com/el-primer-dia-en-la-clase-de-espanol-aprender-espanol",
        image: "images/lesson1.jpg"
    },
    {
        title: "Información personal",
        level: "A1",
        category: "Communication",
        description: "Learn how to introduce yourself, say your name, nationality, age, and basic information.",
        url: "https://arche-ele.com/informacion-personal-aprende-espanol-learn-spanish",
        image: "images/lesson2.jpg"
    },
    {
        title: "Describir lugares con Ser, Estar y Hay",
        level: "A1",
        category: "Grammar",
        description: "Essential structures and key differences for describing cities, rooms, and environments.",
        url: "https://arche-ele.com/describir-lugares-con-ser-estar-hay-learn-spanish",
        image: "images/lesson3.jpg"
    },
    {
        title: "El Pretérito Indefinido: Verbos Regulares",
        level: "A2",
        category: "Grammar",
        description: "Master the conjugation and uses of the regular past tense to tell stories.",
        url: "https://arche-ele.com/el-preterito-indefinido-verbos-regulares-ele",
        image: "images/lesson4.jpg"
    },
    {
        title: "El Pretérito Perfecto",
        level: "A2",
        category: "Grammar",
        description: "Talk about your recent past experiences or those that are related to the present.",
        url: "https://arche-ele.com/el-preterito-perfecto-pasados-aprende-espanol",
        image: "images/lesson5.jpg"
    },
    {
        title: "La comida y el vocabulario de restaurant",
        level: "A2",
        category: "Communication",
        description: "Useful vocabulary related to food, ordering at a restaurant, and culinary preferences.",
        url: "https://arche-ele.com/la-comida-vocabulario-aprende-espanol-ele",
        image: "images/lesson6.jpg"
    },
    {
        title: "Futuro Imperfecto: Actividades Interactivas",
        level: "B1",
        category: "Grammar",
        description: "Learn how to express plans, predictions, and future projects.",
        url: "https://arche-ele.com/futuro-imperfecto-nivel-b1-actividades-interactivas",
        image: "images/lesson7.jpg"
    },
    {
        title: "Por o Para: Diferencias esenciales",
        level: "B1",
        category: "Grammar",
        description: "Practical exercises to help you understand one of the most challenging distinctions in Spanish.",
        url: "https://arche-ele.com/por-o-para-diferencia-ele-actividades-interactivas",
        image: "images/lesson8.jpg"
    },
    {
        title: "El cine: Vocabulario y actividades",
        level: "B1",
        category: "Communication",
        description: "He expresses opinions about movies and film genres and debates them fluently.",
        url: "https://arche-ele.com/el-cine-vocabulario-actividades-comunicativas",
        image: "images/lesson9.jpg"
    }
];

// Initial load
createLessonCard(lessons, "All Lessons");

function createLessonCard(filteredLessons, titleText) {
    const galleryTitle = document.querySelector("#gallery-title");
    if (galleryTitle) {
        galleryTitle.textContent = `${titleText} (${filteredLessons.length})`;
    }

    const galleryContainer = document.querySelector(".gallery-content");
    if (!galleryContainer) return;

    galleryContainer.innerHTML = "";

    filteredLessons.forEach(lesson => {
        let cardSection = document.createElement("section");
        let lessonTitle = document.createElement("h3");
        let lessonLevel = document.createElement("p");
        let lessonCategory = document.createElement("p");
        let lessonDescription = document.createElement("p");
        let lessonImage = document.createElement("img");
        let externalLinkBtn = document.createElement("a");

        lessonTitle.textContent = lesson.title;
        lessonLevel.innerHTML = `<span class="label">Level:</span> ${lesson.level}`;
        lessonCategory.innerHTML = `<span class="label">Focus:</span> ${lesson.category}`;
        lessonDescription.innerHTML = `<span class="label">Description:</span> ${lesson.description}`;


        lessonImage.setAttribute("src", lesson.image);
        lessonImage.setAttribute("alt", `Ilustración de la lección: ${lesson.title}`);
        lessonImage.setAttribute("loading", "lazy");


        externalLinkBtn.setAttribute("href", lesson.url);
        externalLinkBtn.setAttribute("target", "_blank");
        externalLinkBtn.setAttribute("rel", "noopener noreferrer");
        externalLinkBtn.classList.add("lesson-link-btn");
        externalLinkBtn.textContent = "View Full Lesson";

        cardSection.appendChild(lessonTitle);
        cardSection.appendChild(lessonImage);
        cardSection.appendChild(lessonLevel);
        cardSection.appendChild(lessonCategory);
        cardSection.appendChild(lessonDescription);
        cardSection.appendChild(externalLinkBtn);

        galleryContainer.appendChild(cardSection);
    });
}


const allBtn = document.querySelector("#allBtn");
const a1Btn = document.querySelector("#a1Btn");
const a2Btn = document.querySelector("#a2Btn");
const b1Btn = document.querySelector("#b1Btn");
const grammarBtn = document.querySelector("#grammarBtn");
const communicationBtn = document.querySelector("#communicationBtn");

// FILTER BUTTONS

//ALL LESSONS BUTTON
allBtn?.addEventListener("click", () => {
    createLessonCard(lessons, "All Lessons");
});

//A1 LESSONS BUTTON
a1Btn?.addEventListener("click", () => {
    const filtered = lessons.filter(item => item.level === "A1");
    createLessonCard(filtered, "Lessons Level A1");
});

//A2 LESSONS BUTTON
a2Btn?.addEventListener("click", () => {
    const filtered = lessons.filter(item => item.level === "A2");
    createLessonCard(filtered, "Lessons Level A2");
});

//B1 LESSONS BUTTON
b1Btn?.addEventListener("click", () => {
    const filtered = lessons.filter(item => item.level === "B1");
    createLessonCard(filtered, "Lessons Level B1");
});

//GRAMMAR LESSONS BUTTON
grammarBtn?.addEventListener("click", () => {
    const filtered = lessons.filter(item => item.category === "Grammar");
    createLessonCard(filtered, "Grammar Lessons");
});

//COMMUNICATION  LESSONS BUTTON
communicationBtn?.addEventListener("click", () => {
    const filtered = lessons.filter(item => item.category === "Communication");
    createLessonCard(filtered, "Communication Lessons");
});



//REVIEW

document.addEventListener("DOMContentLoaded", () => {

    const grammarForm = document.querySelector("form"); // Detecta si estamos en la página con el formulario

    if (grammarForm && grammarForm.getAttribute("action") === "review.html") {
        grammarForm.addEventListener("submit", () => {
            let practiceCount = parseInt(localStorage.getItem("practiceCount")) || 0;

            practiceCount++;

            localStorage.setItem("practiceCount", practiceCount);
        });
    }

    const counterElement = document.getElementById("counter-display");

    if (counterElement) {
        let currentCount = localStorage.getItem("practiceCount") || 0;
        counterElement.textContent = currentCount;
    }
});