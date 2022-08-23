import "../../styles/other-days.css"
import { useDispatch } from 'react-redux'
import { setCurrentDay } from './slicers/currentDaySlice';
import { setActiveMenu, setActiveGraphIndex } from './Graph/activeMenuSlice';
import { setCurrentDayData } from './slicers/currentDayDataSlice';
import { WeatherIcon } from 'weather-react-icons';
import { getDayAsString } from "./CurrentDay";


export default function OtherDays({ currentCity, currentDay }) {

    const dispatch = useDispatch();

    const onCardClick = (e) => {
        const index = e.currentTarget.getAttribute('index');
        if (index == currentDay) return;
        dispatch(setCurrentDay(parseInt(index)))
        dispatch(setActiveMenu('temp'))
        dispatch(setActiveGraphIndex(0))
        dispatch(setCurrentDayData(currentCity.data.graphData[index].hourlyWeatherData[0]))
    }

    return (
        <div id='other-days' className={'component'}>
            <span>OtherDays</span>

            <div className="container">
                {currentCity.data.daily.map((data, index) => (
                    <div key={index}
                        index={index}
                        onClick={onCardClick}
                        className={`weather-card card${index} ${currentDay == index ? 'active' : ''} `}>
                        {console.log(data)}
                        <div className="icon">
                            <WeatherIcon iconId={`${data.weather[0].id}`} name="owm" />
                        </div>
                        <div className="weather-description">
                            {data.weather[0].description}
                        </div>
                        <div className="temp">
                            {Math.floor((data.temp.day - 273))}&deg;C
                        </div>
                        <div className="day">
                            {getDayAsString(index)}
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    )
}
