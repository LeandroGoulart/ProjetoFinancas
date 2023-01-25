"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
const dotenv = require('dotenv').config();
import './src/styles/reset.css';
import './src/styles/styles.css';
import 'dotenv/config';
import CurrentWeather from './components/CurrentWeather';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

ReactDOM.render(
  <CurrentWeather apiKey={apiKey} />,
  document.getElementById('root')
);
