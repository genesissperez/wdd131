//Last modifications
document.getElementById("lastModified").innerHTML = document.lastModified;
lastModified.textContent = `📅 Last Modification: ${document.lastModified}`;

//display the current year
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


// Climate variables
const temp = 28; // °C
const windSpeed = 12; // km/h

// Function  WindChill

function calculateWindChill(temp, wind) {
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16)));
}


const weatherContent = document.querySelector(".weather-box");

// Check conditions: Temp <= 10°C and Wind > 4.8 km/h
if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    weatherContent.innerHTML += `<p><strong>Wind Chill:</strong> ${windChill}°C</p>`;
} else {
    weatherContent.innerHTML += `<p><strong>Wind Chill:</strong> N/A</p>`;
}