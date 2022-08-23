import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const currentDaySlice = createSlice({
    name: 'currentDay',
    initialState,
    reducers: {
        setCurrentDay: (state, action) => {
            state.value = action.payload;
        },
        resetCurrentDay: (state,action) => {
            state.value = 0;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentDay, resetCurrentDay } = currentDaySlice.actions

export default currentDaySlice.reducer