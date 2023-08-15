import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    
    return( 
    <div className="row two">
        <div className="col-6 cityName">
            <h1>{props.data.city}</h1>
            
                <li class="date">
                    <FormatDate date={props.data.date} />
                </li>
                
            <ul className="propertiesList">
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
                <li>Humidity: {props.data.humidity}%</li>
            </ul>
          
        </div>
        <div className="col-6 cityData">
            <WeatherTemperature celsius={props.data.temperature}/>
                        
            <li className="description text-capitalize">{props.data.description}</li>
            
             <img src={props.data.icon} alt={props.data.description}/>
        </div>
    </div>

    );

}