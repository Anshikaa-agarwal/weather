import React from 'react';
import { useState } from 'react';
import './Card.css'
import Search from './Search';

function Card() {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
  }

  const handleInput = (e) => {
      setCity(e.target.value);
  }

  const fetchData = async () => {
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=8c81d90ffc5245d3b9c70046242907&q=${city}&aqi=yes`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setWeatherData({
        current: parsedData.current,
        location: parsedData.location,
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <Search handleInput={handleInput} handleSubmit={handleSubmit} />
    <div className='card'>
      
    {weatherData && weatherData.current && weatherData.location ? (
        <div className='card'>

          {/* iamge */}
          <img src={weatherData.current.condition.icon} alt="weather icon" className='icon'/>

          <div className='data'>
            <p className="temp">{weatherData.current.temp_c}°C</p>

            <p className="location"> 
              <div className='city'>
                {weatherData.location.name}
              </div>
              <div className='state'>
                {weatherData.location.region}, {weatherData.location.country}
              </div>
            </p>

            <p className="other-info">
              <div className="humidity other">
                <i className="fa-solid fa-droplet i" style={{color: '#ffffff'}}></i>
                <div className="humid-data">
                  <div>Humidity</div>
                  <div>{weatherData.current.humidity}</div>
                </div>
              </div>
              <div className="feels-like other">
                <i class="fa-solid fa-temperature-three-quarters i" style={{color: '#ffffff'}}></i>
                <div className="feels-like-data">
                  <div>Feels like</div>
                  <div>{weatherData.current.feelslike_c}°C</div>
                </div>
              </div>
            </p>
            
          </div>

        </div>
      ) : (
        <p>No data available. Please search for a city.</p>
      )}
      
    </div>
    </>
  )
}

export default Card
