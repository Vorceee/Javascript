const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=60&longitude=25&current_weather=true&windspeed_unit=ms";
let text = document.getElementById("text");


async function getJoke() {
    const resp = await fetch(apiUrl);
    const joke = await resp.json();

    console.log(joke);
    text.innerHTML = `Longitude: ${joke.longitude} och Latitude: ${joke.latitude} <br> timezone: ${joke.timezone} <br> temperaturen är: ${joke.current_weather.temperature}`;
    
}