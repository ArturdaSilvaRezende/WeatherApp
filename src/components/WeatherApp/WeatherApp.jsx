import React, { useEffect, useState } from "react";

//components
import FormWeather from "./FormWeather";
import ContentWeather from "./ContentWeather";
import DateWeather from "./DateWeather";

//custom style
import "./style/WeatherApp.css";
import "./style/WeatherAppForm.css";

//services
import { getWeather } from "../../services/WeatherApi";

//countries
import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const WeatherApp = (props) => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Brasília");
  const [state, setState] = useState("Brasília");

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  useEffect(() => {
    getWeather(state).then((data) => setApiData(data));
  }, [state]);

  return (
    <div className="WeatherApp">
      <h2 className="WeatherApp__title">React Weather App</h2>

      <div className="WeatherApp__container">
        <DateWeather date={new Date()} />
        <FormWeather
          inputHandler={inputHandler}
          getState={getState}
          submitHandler={submitHandler}
        />

        <ContentWeather
          apiData={apiData}
          kelvinToFarenheit={kelvinToFarenheit}
          countries={countries}
        />
      </div>
    </div>
  );
};

export default WeatherApp;
