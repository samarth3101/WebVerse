const box = document.getElementById("box");

const resetButton = document.getElementById("resbtn");

const defaultColor = "white";
const defaultText = "CLICK ME..!"

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return`rgb(${r},${g},${b})`;
}

box.addEventListener("click", function () {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    box.textContent = randomColor;
    box.textContent = `Color: ${randomColor}`;
});

resetButton.addEventListener("click", function(){
    box.style.backgroundColor = defaultColor;
    box.textContent = defaultText;
})