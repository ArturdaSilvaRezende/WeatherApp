import React from "react";

//custom style
import "./style/WeatherDate.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";

const DateWeather = (props) => {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const year = d.getFullYear();
  const date = d.getDate();
  const monthName = months[d.getMonth()];
  const dayName = days[d.getDay()];

  return (
    <div className="WeatherApp__date">
      <div className="Weather__date-content">
        <h2>{dayName}</h2>
        <p>
          <span>{date}/</span>
          <span>{monthName}/</span>
          <span>{year}</span>
        </p>
      </div>

      <p className="WeatherApp__date-hour">
        <FontAwesomeIcon icon={faClockFour} /> Current time:{" "}
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default DateWeather;
