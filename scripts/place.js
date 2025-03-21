document.addEventListener("DOMContentLoaded", function () {
    // Display current year
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

    // Fetch weather data from an API (e.g., OpenWeatherMap)
    const apiKey = 'your-api-key';  // Replace with your actual API key
    const city = 'El Nido';  // City or location for weather data
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract weather information
            const temperature = data.main.temp;  // Temperature in Celsius
            const conditions = data.weather[0].description;  // Weather condition
            const windSpeed = data.wind.speed;  // Wind speed in km/h
            const windChill = calculateWindChill(temperature, windSpeed);  // Calculate wind chill

            // Update the HTML with the fetched data
            document.getElementById("temperature").textContent = temperature;
            document.getElementById("conditions").textContent = conditions;
            document.getElementById("wind-speed").textContent = windSpeed;
            document.getElementById("wind-chill").textContent = windChill;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) + "°C";
        } else {
            return "N/A";
        }
    }
});
