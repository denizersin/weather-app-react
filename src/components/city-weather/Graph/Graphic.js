import React, { useEffect, useRef, useState } from 'react'
import { promiseFor } from '../../../App';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDayData } from '../slicers/currentDayDataSlice';
import { setActiveGraphIndex } from './activeMenuSlice';
import { FaLongArrowAltDown } from 'react-icons/fa';
const reSizeGraph = async (valueContainerRef, yValues) => {
    await promiseFor(0);
    const max = Math.max(...yValues) * 1.5;
    const linesRef = [...valueContainerRef.querySelectorAll('.value-container>.line')]
    linesRef.forEach((el, i) => {
        const x = Math.floor(yValues[i] / max * 100);
        el.style.height = `${x}%`
    })
    const ball = document.getElementById('ball');
    ball.style.width = linesRef[0].getBoundingClientRect().width *.15 + 'px';
    ball.style.height = linesRef[0].getBoundingClientRect().width / 3 + 'px';
}

const locateBall = async (valueContainerRef, activeGraphIndex) => {
    const ball = document.getElementById('ball');
    const activeValueEl = [...valueContainerRef.querySelectorAll('.value-container>.y-value')][activeGraphIndex]
    const diffX = activeValueEl.getBoundingClientRect().x - ball.getBoundingClientRect().x;
    const diffY = activeValueEl.getBoundingClientRect().y - ball.getBoundingClientRect().y;
    let a = parseInt(getComputedStyle(ball).left) + diffX + activeValueEl.offsetWidth/2-ball.offsetWidth/2;
    let b = parseInt(getComputedStyle(ball).top) + diffY - activeValueEl.offsetWidth / 4

    ball.style.left = `${a}px`
    ball.style.top = `${b}px`
}

export default function Graphic({ currentCity, activeMenu, currentDay }) {
    const activeGraphIndex = useSelector((state) => state.activeMenu.activeGraphIndex) //!temp,feels_like, humidity,wind_speed
    console.log('graphic')
    const valueContainerRef = useRef(null);
    valueContainerRef.current && locateBall(valueContainerRef.current, activeGraphIndex);

    const dispatch = useDispatch();

    useEffect(() => {
        reSizeGraph(valueContainerRef.current, yValues);
        locateBall(valueContainerRef.current, activeGraphIndex);
    });

    const onGraphValueClick2 = (e) => {
        const index = e.currentTarget.getAttribute('index');
        if (activeGraphIndex == index) return;
        dispatch(setActiveGraphIndex(index));
        dispatch(setCurrentDayData({ ...currentCity.data.graphData[currentDay].hourlyWeatherData[index] }))
    }


    const xValues = currentCity.data.graphData[currentDay].hourlyWeatherData.map(data => data.time);
    const yValues = currentCity.data.graphData[currentDay].hourlyWeatherData.map(data => data[activeMenu]);
    return (
        <div id='graph' className={'component graphic'}>
            <span>Graph</span>



            <div ref={valueContainerRef} className="container">
                {xValues.map((x, i) => (
                    <div
                        key={i}
                        index={i}
                        onClick={(e) => {
                            // onGraphValueClick(e);
                            onGraphValueClick2(e);
                        }}
                        className={`value-container value-container${i} ${i == activeGraphIndex ? 'active' : ''}`}>

                        <div className='value x-value'>{x}:00</div>
                        <div className='line'></div>
                        <div className='value y-value'>{yValues[i]}</div>
                    </div>
                ))}

                <div id='ball'>
                    <FaLongArrowAltDown />
                </div>
            </div>


        </div>
    )
}
