import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: undefined
}

export const currentDayDataSlice = createSlice({
    name: 'currentDayData',
    initialState,
    reducers: {
        setCurrentDayData: (state, action) => {
            const data = action.payload;
            state.value = {
                ...data
            }
        }
    },
})

export const { setCurrentDayData } = currentDayDataSlice.actions

export default currentDayDataSlice.reducer