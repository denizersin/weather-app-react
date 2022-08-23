import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeLayout() {
    let navigate = useNavigate();
    const onPickCityClick = (e) => {
        navigate("/pick-city", { replace: true });
    }
    return (
        <div className={'HomeLayout component'}>
            <span>HomeLayout</span>
            <h1>Home</h1>
        </div>
    )
}
