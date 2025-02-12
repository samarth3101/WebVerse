// Learning progress data
const progressData = {
    1: { title: "Day 1", description: "Introduction to Python & AI", file: "day1_notes.pdf" },
    2: { title: "Day 2", description: "Data Preprocessing & Cleaning", file: "day2_notes.pdf" },
    3: { title: "Day 3", description: "Supervised vs Unsupervised Learning", file: "day3_notes.pdf" },
    4: { title: "Day 4", description: "Exploring Neural Networks", file: "day4_notes.pdf" },
    5: { title: "Day 5", description: "Gradient Descent & Backpropagation", file: "day5_notes.pdf" },
    6: { title: "Day 6", description: "Working with Scikit-Learn", file: "day6_notes.pdf" },
    7: { title: "Day 7", description: "Deep Learning Project", file: "day7_notes.pdf" }
};

//open popup
function openDay(day) {
    const popup = document.getElementById("dayPopup");
    const title = document.getElementById("dayTitle");
    const desc = document.getElementById("dayDescription");
    const downloadLink = document.getElementById("downloadLink");

    title.textContent = progressData[day].title;
    desc.textContent = progressData[day].description;
    downloadLink.href = progressData[day].file;
    
    popup.style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("dayPopup").style.display = "none";
}
