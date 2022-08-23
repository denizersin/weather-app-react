import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDayData } from './slicers/currentDayDataSlice';
import { WeatherIcon } from 'weather-react-icons';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { GiWindSlap } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';

import "../../styles/current-day.css"

export default function CurrentDay({ currentCity, currentDay }) {
    console.log('current dat')
    console.log(currentCity.data)
    const currentDayData = useSelector((state) => state.currentDayData.value)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentDayData({
            ...currentCity.data.graphData[currentDay].hourlyWeatherData[0]
        }))
    }, []);

    if (!currentDayData) return <></>;
    return (
        <div id='current-day' className={'component'}>
            <div className="col left">
                <div className='city-name'>{currentCity.cityName}</div>
                <div className='day'>{getDayAsString(currentDay)} </div>
                <div>{currentDayData.time % 24}:00</div>
            </div>

            <div className="col center">
                <div className="icon">
                    <WeatherIcon iconId={`${currentDayData.weather[0].id}`} name="owm" />
                </div>
                <div className="weather-description">
                    {currentDayData.weather[0].description}
                </div>
                <div className="temp">
                    {Math.floor((currentDayData.temp))}&deg;C
                </div>
                <div>feels like:{Math.floor((currentDayData.feels_like))}&deg;C</div>

            </div>

            <div className="col right">
                <div className="container">
                    <div> <div >max:  </div> <div className='max-value'>{Math.floor(currentCity.data.daily[currentDay].temp.max - 273)}&deg;C <FaArrowUp /></div></div>
                    <div> <div >min:</div> <div className='min-value'>{Math.floor(currentCity.data.daily[currentDay].temp.min - 273)}&deg;C <FaArrowDown /></div></div>
                    <div className="humidity">
                        <div className='hum'>humidity:</div>
                        <div className='humidity-value'><span>{currentDayData.humidity}</span> <WiHumidity /></div>
                    </div>
                    <div className="wind_speed"><div className='speed'>wind:</div><div className='wind-speed-value'>{currentDayData.wind_speed} <GiWindSlap /></div></div>
                </div>
            </div>
        </div>
    )
}


export const getDayAsString = (id) => {
    let x = parseInt(new Date().getDay().toString())
    id = (id + x) % 7;
    return ['PAZAR', 'PAZARTESI', 'SALI', 'CARSAMBA', 'PERSEMBE', 'CUMA', 'CUMARTESI'][id]
}