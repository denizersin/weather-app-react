import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDayData } from '../slicers/currentDayDataSlice';
import { setActiveGraphIndex, setActiveMenu } from './activeMenuSlice';

export default function GraphNav({ currentCity, activeMenu, currentDay }) {

    const dispatch = useDispatch();
    
    const onMenuClick = (e) => {
        const type = e.currentTarget.getAttribute('type');
        console.log('asd')
        if (type == activeMenu) return;
        dispatch(setCurrentDayData(currentCity.data.graphData[currentDay].hourlyWeatherData[0]))
        dispatch(setActiveMenu(type))
        dispatch(setActiveGraphIndex(0))
    }
    return (
        <div className={'component navigation'}>
            <span>Nav</span>
            <nav>
                <div className={`menu menu1 ${activeMenu == 'temp' ? 'active' : ''}`} type={'temp'} onClick={onMenuClick}>temp</div>
                <div className={`menu menu2 ${activeMenu == 'humidity' ? 'active' : ''}`} type={'humidity'} onClick={onMenuClick}>humidity</div>
                <div className={`menu menu3 ${activeMenu == 'wind_speed' ? 'active' : ''}`} type={'wind_speed'} onClick={onMenuClick}>wind_speed</div>
                <div className={`menu menu4 ${activeMenu == 'feels_like' ? 'active' : ''}`} type={'feels_like'} onClick={onMenuClick}>feels_like</div>
            </nav>
        </div>
    )
}
