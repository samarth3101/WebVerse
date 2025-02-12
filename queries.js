let queries = [];

function postQuery() {
    const queryInput = document.getElementById("queryInput");
    const queryText = queryInput.value.trim();

    if (queryText === "") {
        alert("Please enter a question before posting.");
        return;
    }

    const query = { id: queries.length + 1, text: queryText };
    queries.unshift(query);

    queryInput.value = ""; // Clear input
    renderQueries();
}

//display queries
function renderQueries() {
    const queryList = document.getElementById("queryList");
    queryList.innerHTML = ""; // Clear existing list

    queries.forEach(query => {
        const queryItem = document.createElement("div");
        queryItem.className = "query-item";
        queryItem.textContent = query.text;
        queryItem.onclick = () => openPopup(query.text);
        queryList.appendChild(queryItem);
    });
}

//open the popup
function openPopup(queryText) {
    document.getElementById("queryTitle").textContent = "Query";
    document.getElementById("queryDetails").textContent = queryText;
    document.getElementById("queryPopup").style.display = "flex";
}

// close the popup
function closePopup() {
    document.getElementById("queryPopup").style.display = "none";
}
