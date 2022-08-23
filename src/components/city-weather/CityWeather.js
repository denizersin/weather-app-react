import React, { useEffect } from 'react'
import { xValues, yValues } from '../../App'
import CurrentDay from './CurrentDay'
import Graph from './Graph/Graph'
import OtherDays from './OtherDays'
import { useSelector, useDispatch } from 'react-redux'






export default function CityWeather({ currentCity }) {
    const currentDay = useSelector((state) => state.currentDay.value)
    console.log('city-weather')
    return (
        <div className={'component'}>
            <span>CityWeather</span>
            <CurrentDay currentCity={currentCity} currentDay={currentDay} />
            <Graph currentCity={currentCity} currentDay={currentDay} />
            <OtherDays currentCity={currentCity} currentDay={currentDay} />
        </div>
    )
}
