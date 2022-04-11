import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

const FormWeather = (props) => {
  const { inputHandler, getState, submitHandler } = props;
  return (
    <div className="WeatherApp__form">
      <label className="WeatherApp__form-label" htmlFor="location-name">
        Enter Location :
      </label>

      <div className="WeatherApp__forms-contents">
        <input
          type="text"
          id="location-name"
          onChange={inputHandler}
          value={getState}
          className="WeatherApp__form-input"
          required
        />

        <button className="WeatherApp__form-btn" onClick={submitHandler}>
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </button>
      </div>
    </div>
  );
};

export default FormWeather;
