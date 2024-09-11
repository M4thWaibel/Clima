const apiKey = "db17da5065a295f2b305995518522d1e";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const countryElement = document.querySelector("#country-flag");
const temperatureElement = document.querySelector("#temperature span");
const windElement = document.querySelector("#wind span");
const humidityElement = document.querySelector("#humidity span");


const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data;

};

const showWeatherData = async(city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    temperatureElement.innerText = parseInt(data.main.temp);
    countryElement.setAttribute("src",`https://flagsapi.com/${data.sys.country}/flat/64.png`);
    windElement.innerText = `${data.wind.speed}km/h`;
    humidityElement.innerText = `${data.main.humidity}%`;
};

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value;

        showWeatherData(city);
    }
});