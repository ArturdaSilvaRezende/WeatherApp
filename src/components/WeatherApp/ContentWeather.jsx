import React from "react";

//custom style
import "./style/WeatherAppContent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContentWeather = (props) => {
  const { apiData, kelvinToFarenheit, countries } = props;
  return (
    <div className="WeatherApp__contents">
      {apiData.main ? (
        <div className="WeatherApp__contents-container">
          <figure>
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <figcaption>
              <p>{kelvinToFarenheit(apiData.main.temp)}&deg; C</p>

              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                <strong>{apiData.name}</strong>
              </p>
            </figcaption>
          </figure>

          <div className="WeatherApp__contents-temperature">
            <div>
              <p>
                <span>Min:</span>
                <FontAwesomeIcon icon={faArrowDownShortWide} />
                <strong>
                  {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                </strong>
              </p>
              <p>
                <span>Max:</span>
                <FontAwesomeIcon icon={faArrowUpWideShort} />
                <strong>
                  {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                </strong>
              </p>
            </div>
            <div>
              <p>
                <span>Weather: </span>
                <strong>{apiData.weather[0].main}</strong>
              </p>
              <p>
                <span>Countries: </span>
                <strong>
                  {countries.getName(apiData.sys.country, "en", {
                    select: "official",
                  })}
                </strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Please enter a valid name</h1>
      )}
    </div>
  );
};

export default ContentWeather;
