import React from "react";
import Weather from "./Weather";

export default function WeatherForecastDay(props){

    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
            return `${temperature}º`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
            return `${temperature}º`;
    }

    function day(){
        let date= new Date(props.data.time * 1000);
        let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];

        return days[day]
    }

    return (
        <div>
        <div className="forecastDays">{day()}</div>
    <img src={props.icon.icon} alt={props.icon.description} width="85"/>
    <div className="forecastVariationTemperature">
<span className="maxTemperature">{maxTemperature()}</span>
    <span className="minTemperature">/ {minTemperature()}</span>
 </div>   
 </div>
    )
}