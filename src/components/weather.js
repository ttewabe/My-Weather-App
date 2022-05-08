import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

function WeatherCard ({weatherData}) {
return (
  <div className="container main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="temp">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="temp">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
      <div className="flex">             
      <div className="col-6 col-sm-3 temp">
          <h>Contact US</h>
          <a role="button" className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fb-lg" /></a>{' '}
          <a role="button" className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{''}
          <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
          <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
      </div>
      <div className="col-sm-4 temp">
          <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-408-xxx-xxxx</a><br />
          <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> tomtadege@gmail.com</a>
      </div>
  </div>
  </div>
)
}
export default WeatherCard;