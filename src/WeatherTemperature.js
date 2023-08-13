import React, {useState} from "react";

export default function WeatherTemperature(props){
let [unit, setUnit]= useState("celsius")

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}

function fahrenheit(){
return (props.celsius * 9) / 5+32;
}

if (unit ==="celsius") {
return (
    <div>
        <p>{Math.round(props.celsius)}</p>
            <span> ºC | <a href="/" onClick={showFahrenheit}>ºF</a> </span>
    </div>
);
} else {
   return (
    <div>
        <p>{Math.round(fahrenheit())}</p>
            <span> <a href="/" onClick={showCelsius}>ºC</a> | ºF </span>
    </div>
           
);
}
}  