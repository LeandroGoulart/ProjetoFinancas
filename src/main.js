import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import './src/styles/reset.css';
import './src/styles/styles.css';
import CurrentWeather from './components/CurrentWeather';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const App = () => (
  <CurrentWeather apiKey={apiKey} />
);

ReactDOM.render(
  <App />,
  document.getElementById('weather-widget')
);

const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('nav a');

menuItens.forEach((item) => {
  item.addEventListener('click', (e) => {
      e.preventDefault();

      menuItens.forEach((menuItem) => {
          menuItem.classList.remove('selected-item');
      });
      item.classList.add('selected-item');

      sections.forEach((section) => {
          section.classList.add('hide');
      });

      document.querySelector(item.getAttribute('href')).classList.remove('hide');
  });
});