import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect (() => {
    setLoaded(false);
}, [props.coordinates]);


function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
}


if(loaded) {
 return (
    <div className="row WeatherForecast">
     
        {forecast.map(function (dailyForecast, index){
            if (index < 6){
                return (
          <div className="col-2" key={index}>
     <WeatherForecastDay data={dailyForecast} />
        </div>
                );
            } else {
                return null;
            }
        })}
        </div>
    );
} else {

     let apiKey = "a1b283feoeccefb140t55b69080a1da6";
     let lon = props.coordinates.longitude;
     let lat = props.coordinates.latitude;
let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

 return null;
}
};