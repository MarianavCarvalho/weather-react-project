import React from "react";

export default function Weather(){
    return (
        <div className="Weather">
<form>
    <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Type a City..." className="form-control" autocomplete="off"/>
        </div>
        <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
    </div>
</form>

    <div className="row two">
        <div className="col-6 cityName">
            <h1>Lisbon</h1>
            <ul className="leftList">
                <li class="date">Saturday 11:00</li>
                </ul>
            <ul className="propertiesList">
                <li>Wind:km/h</li>
                <li>Humidity:%</li>
            </ul>
          
        </div>
        <div className="col-6 cityData">
            <span>12</span>
            <span> ºC </span>             
            <ul className="rightList">
                <li>Clear Sky</li>
            </ul>
             <img src="" alt="" id="icon"/>
        </div>
    </div>
    
</div>


    );
}