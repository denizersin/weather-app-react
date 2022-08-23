import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { store } from './store'
import { Provider } from 'react-redux'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PickCityLayout from './pages/pick-city/PickCityLayout';
import HomeLayout from './pages/Home/HomeLayout';
import CityWeather from './components/city-weather/CityWeather';
import CityWeatherLayout from './pages/city-weather/CityWeatherLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeLayout />} />
          <Route path="pick-city" element={<PickCityLayout />} />
          <Route path="city/:url" element={<CityWeatherLayout />} />
        </Route>

        <Route ></Route>
      </Routes>
    </BrowserRouter>


  </Provider>
);
