let isAutobot = true;

function toggleFaction() {
    const toggleIcon = document.getElementById("toggle-icon");
    const toggleContainer = document.querySelector(".toggle-container");
    const slider = document.querySelector(".slider");

    if (isAutobot) {
        toggleIcon.src = "assets/decipticon.png"; 
        toggleContainer.style.backgroundColor = "#990000A0"; 
        slider.style.transform = "translateX(30px)";
        document.getElementById("content").innerHTML = `
            <h1>DECEPTICONS.......!</h1>
            <p>I will Kill you..</p>
        `;
    } else {
        toggleIcon.src = "assets/atobot.png"; 
        toggleContainer.style.backgroundColor = "#0033CCBA"; 
        slider.style.transform = "translateX(0px)";
        document.getElementById("content").innerHTML = `
            <h1>AUTOBOTS welcome you ..!</h1>
            <p>My name is optimus prime and i am here to guide you throughout journey of us.</p>
        `;
    }

    isAutobot = !isAutobot; 
}