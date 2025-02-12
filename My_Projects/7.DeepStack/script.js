
function toggleChat() {
    const chatBox = document.getElementById("deepaiChat");
    chatBox.classList.toggle("active");
}

// Close chat
document.addEventListener("click", function (event) {
    const chatBox = document.getElementById("deepaiChat");
    const chatButton = document.querySelector(".deepai-dot");

    if (!chatBox.contains(event.target) && !chatButton.contains(event.target)) {
        chatBox.classList.remove("active");
    }
});

function enterDeepStack() {
    alert("Entering DeepStack... Stay tuned for more updates!");
    window.location.href = "progress.html";
}

function toggleChat() {
    const chat = document.getElementById("deepaiChat");
    chat.classList.toggle("active");
}