import React, { useState, useEffect } from 'react';

function CurrentWeather(props) {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        async function fetchWeather() {
            const apiKey = props.apiKey;
            const location = await getCurrentLocation();
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`);
            const data = await response.json();
            setWeather(data);
        }
        fetchWeather();
    }, []);

    function getCurrentLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    reject(error);
                }
            );
        });
    }

    return (
        <div>
            <h1>Tempo Atual</h1>
            <p>Cidade: {weather.name}</p>
            <p>Temperatura: {weather.main.temp}</p>
            <p>Clima: {weather.weather[0].description}</p>
        </div>
    );
}

export default CurrentWeather;
