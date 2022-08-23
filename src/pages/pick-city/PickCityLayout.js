import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetActiveGraphIndex, resetActiveMenu } from '../../components/city-weather/Graph/activeMenuSlice';
import { resetCurrentDay } from '../../components/city-weather/slicers/currentDaySlice';

import "../../styles/pick-city.css"

export default function PickCityLayout() {
    const [inputValue, setİnputValue] = useState('');

    let navigate = useNavigate();
    const dispatch = useDispatch();


    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onInputKeyDown = (e) => {
        if (e.key == 'Enter' && e.key != '') {
            onSearchClick();
        }
    }
    const onSearchClick = () => {
        
        [resetCurrentDay,resetActiveGraphIndex, resetActiveMenu].forEach(action => dispatch(action()))
        navigate(`/city/${inputValue}`, { replace: true });
        setİnputValue('');
    }
    return (
        <div className={'PickCity component'}>
            <span>PickCityLayout</span>
            <input ref={inputRef} type="text" value={inputValue} onChange={(e) => setİnputValue(e.target.value)} onKeyDown={onInputKeyDown} placeholder={'type a city'} />
            <button onClick={onSearchClick}>ara</button>
        </div>
    )
}
