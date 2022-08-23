import Graphic from './Graphic'
import GraphNav from './GraphNav'
import { useSelector } from 'react-redux'
import '../../../styles/graph.css'
import React, { useEffect, useRef, useState } from 'react'



export default function Graph({ currentCity, currentDay }) {
    const activeMenu = useSelector((state) => state.activeMenu.value) //!temp,feels_like, humidity,wind_speed
    console.log('Graph')
    return (
        <div id='graph' className={'component'}>
            <span>Graph</span>
            <GraphNav activeMenu={activeMenu} currentCity={currentCity} currentDay={currentDay} />
            <Graphic activeMenu={activeMenu} currentCity={currentCity} currentDay={currentDay} />
        </div>
    )
}
