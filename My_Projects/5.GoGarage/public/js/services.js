// Fetch services from the backend API
fetch("/api/services")
    .then((response) => response.json())
    .then((services) => {
        const container = document.getElementById("services-container");
        services.forEach((service) => {
            const serviceDiv = document.createElement("div");
            serviceDiv.className = "service-item";
            serviceDiv.innerHTML = `
        <h2>${service.name}</h2>
        <p>Price: ₹${service.price}</p>
      `;
            container.appendChild(serviceDiv);
        });
    })
    .catch((error) => console.error("Error fetching services:", error));