import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    
    let [weather, setWeather] = useState({ ready: false });
   
    function handleResponse(response){
setWeather({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date :"Saturday 11:00",
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon
});
    }

    if(weather.ready){
    return (
        <div className="Weather">
<form>
    <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Type a City..." className="form-control" autoComplete="off"/>
        </div>
        <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
    </div>
</form>

    <div className="row two">
        <div className="col-6 cityName">
            <h1>{weather.city}</h1>
            <ul className="leftList">
                <li class="date">{weather.date}</li>
                </ul>
            <ul className="propertiesList">
                <li>Wind:{weather.wind}km/h</li>
                <li>Humidity:{weather.humidity}%</li>
            </ul>
          
        </div>
        <div className="col-6 cityData">
            <span>{Math.round(weather.temperature)}</span>
            <span> ºC </span>             
            <ul className="rightList">
                <li className="text-capitalize">{weather.description}</li>
            </ul>
             <img src={weather.icon} alt={weather.description}/>
        </div>
    </div>
    </div>
    );
    
    } else {
 let apiKey = "866a208a73eeff02182218e9441647a1";
    let city = "Lisbon";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return (
    <p>Loading</p>
)
    }
}