import React from "react";
import Weather from "./Weather";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

function handleResponse(response){
 console.log(response.data)
}

     let apiKey = "a1b283feoeccefb140t55b69080a1da6";
     let lon = props.coordinates.longitude;
     let lat = props.coordinates.latitude;
let apiUrl= `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

    return (
    <div className="row WeatherForecast">
     <div className="col-2">
    <div className="forecastDays"> Mon </div>
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="" width="85"/>
    <div className="forecastVariationTemperature">
<span className="maxTemperature">26º</span>
    <span className="minTemperature">/ 17º</span>
 </div>   
        </div>
     </div>
    );
}