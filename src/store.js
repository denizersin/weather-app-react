import { configureStore } from '@reduxjs/toolkit'
import currentDayReducer from './components/city-weather/slicers/currentDaySlice'
import currentDayDataReducer from './components/city-weather/slicers/currentDayDataSlice'
import activeMenuReducer from './components/city-weather/Graph/activeMenuSlice'


export const store = configureStore({
    reducer: {
        currentDayData: currentDayDataReducer,
        currentDay: currentDayReducer,
        activeMenu: activeMenuReducer,
    }, 
})


