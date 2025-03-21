document.addEventListener("DOMContentLoaded", function () {
    // Display current year
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

    // Fetch weather data from OpenWeatherMap API
    const apiKey = 'your-api-key'; // Replace with your actual API key
    const city = 'El Nido';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const windChill = calculateWindChill(temperature, windSpeed);

            document.getElementById("temperature").textContent = temperature;
            document.getElementById("conditions").textContent = conditions;
            document.getElementById("wind-speed").textContent = windSpeed;
            document.getElementById("wind-chill").textContent = windChill;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) + "°C";
        } else {
            return "N/A";
        }
    }
});
