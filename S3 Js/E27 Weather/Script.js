const ApiKey = "25fa92f5ab32c96f06f537ed1e5b3427"
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const SearchBox = document.querySelector(".Search input")
const SearchBtn = document.querySelector(".Search button")
const Weather_Icon = document.querySelector(".WeatherIcon")

async function CheckWeather(City) 
{
    const Response = await fetch(ApiUrl + City + `&appid=${ApiKey}`)

    if (Response.status == 404) 
    {
        document.querySelector(".Error").style.display = "block"
        document.querySelector(".Weather").style.display = "none"
    }
    else 
    {
        let Data = await Response.json()
        console.log(Data);

        document.querySelector(".City").innerHTML = Data.name
        document.querySelector(".Temperature").innerHTML = Math.round(Data.main.temp) + " °c"
        document.querySelector(".Humidity").innerHTML = Data.main.humidity + " %"
        document.querySelector(".Wind").innerHTML = Data.wind.speed + " km/h"

        if (Data.weather[0].main == "Clouds") 
        {
            Weather_Icon.src = "E31_5.png"
        }
        else if (Data.weather[0].main == "Clear") 
        {
            Weather_Icon.src = "E31_4.png"
        }
        else if (Data.weather[0].main == "Rain") 
        {
            Weather_Icon.src = "E31_6.png"
        }
        else if (Data.weather[0].main == "Drizzle") 
        {
            Weather_Icon.src = "E31_10.png"
        }
        else if (Data.weather[0].main == "Mist") 
        {
            Weather_Icon.src = "E31_12.png"
        }

        document.querySelector(".Weather").style.display = "block"
        document.querySelector(".Error").style.display = "none"
    }
}

SearchBtn.addEventListener("click", function () 
{
    CheckWeather(SearchBox.value)
})