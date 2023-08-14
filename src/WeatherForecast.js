import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props){
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