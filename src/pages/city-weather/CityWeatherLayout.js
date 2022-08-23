import React from 'react'
import { useEffect, useState } from 'react';
import { fetchCityData } from '../../apis/api';
import CityWeather from '../../components/city-weather/CityWeather';
import Loading from '../../components/Loading';


import 'weather-react-icons/lib/css/weather-icons.css';
import { useParams } from 'react-router-dom';



function setgraphData(data) {
    let arr = [];
    for (let i = 0; i < 7; i++) {
        let arr2 = [[], []];
        for (let k = 0; k < 7; k++) {
            arr2[1].push({
                ...data.hourly[i % 6 * 7 + k],
                time: new Date().getHours() + k
            });
        }
        arr.push({
            hourlyWeatherData: arr2[1]
        })
    }
    data.graphData = arr; //! data
    data.graphData.forEach(data => {
        data.hourlyWeatherData = data.hourlyWeatherData.map(e => ({ ...e, temp: Math.floor(e.temp - 273), feels_like: Math.floor(e.feels_like - 273) }))
    })
}


export default function CityWeatherLayout() {




    const [currentCity, setCurrentCity] = useState(false);
    let params = useParams();
    const city = params.url;
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCityData(city)
            data.daily.length = 7;
            setgraphData(data);
            setCurrentCity({
                cityName: city,
                data: data
            });
        }
        fetchData();
        console.log('mount')
        return () => {
            console.log('unmount')

        }
    }, []);

    return (
        <div className="component" >
            <span>CityWeatherLayout</span>
            {!currentCity && <Loading />}
            {
                (currentCity &&
                    <CityWeather currentCity={currentCity} />
                )
            }
        </div>
    );
}
