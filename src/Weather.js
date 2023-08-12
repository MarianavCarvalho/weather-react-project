import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    
    let [weather, setWeather] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);
   
    function handleResponse(response){
setWeather({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon
});
    }

    function search(){
 let apiKey = "866a208a73eeff02182218e9441647a1";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
event.preventDefault();
search();
    }

    function handleCityChange(event){
setCity(event.target.value);
    }


    if(weather.ready){
    return (
        <div className="Weather">
<form onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Type a City..." className="form-control"
            onChange={handleCityChange}/>
        </div>
        <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
    </div>
</form>
<WeatherInfo data={weather}/>
  </div> );
    } else {
            search()
return "Loading..."
    }
}