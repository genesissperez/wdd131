//Last modifications
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `📅 Last Modification: ${document.lastModified}`;
}

//display the current year
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//REVIEW

document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    const counterElement = document.getElementById("counter-display");
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
});
