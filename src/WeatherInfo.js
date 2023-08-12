import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){
    return( 
    <div className="row two">
        <div className="col-6 cityName">
            <h1>{props.data.city}</h1>
            <ul className="leftList">
                <li class="date">
                    <FormatDate date={props.data.date} />
                </li>
                </ul>
            <ul className="propertiesList">
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
                <li>Humidity: {props.data.humidity}%</li>
            </ul>
          
        </div>
        <div className="col-6 cityData">
            <span>{Math.round(props.data.temperature)}</span>
            <span> ºC </span>             
            <ul className="rightList">
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
             <img src={props.data.icon} alt={props.data.description}/>
        </div>
    </div>

    );

}