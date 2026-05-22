//Last modifications
document.getElementById("lastModified").innerHTML = document.lastModified;
lastModified.textContent = `📅 Last Modification: ${document.lastModified}`;

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