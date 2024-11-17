// Initial toggle state
let isAutobot = true;

function toggleFaction() {
    const toggleIcon = document.getElementById("toggle-icon");
    const toggleContainer = document.querySelector(".toggle-container");
    const slider = document.querySelector(".slider");

    if (isAutobot) {
        // Switch to Decepticons
        toggleIcon.src = "assets/decipticon.png"; // Path to Decepticon logo
        toggleContainer.style.backgroundColor = "#990000A0"; // Decepticon color
        slider.style.transform = "translateX(30px)";
        document.getElementById("content").innerHTML = `
            <h1>DECEPTICONS.......!</h1>
            <p>I will Kill you..</p>
        `;
    } else {
        // Switch to Autobots
        toggleIcon.src = "assets/atobot.png"; // Path to Autobots logo
        toggleContainer.style.backgroundColor = "#0033CCBA"; // Autobots color
        slider.style.transform = "translateX(0px)";
        document.getElementById("content").innerHTML = `
            <h1>AUTOBOTS welcome you ..!</h1>
            <p>My name is optimus prime and i am here to guide you throughout journey of us.</p>
        `;
    }

    isAutobot = !isAutobot; // Toggle state
}