import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'temp',
    activeGraphIndex: 0

}

export const activeMenuSlice = createSlice({
    name: 'activeMenu',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.value = action.payload;
        },
        setActiveGraphIndex: (state, action) => {
            state.activeGraphIndex = action.payload
        },
        resetActiveMenu: (state) => {
            state.value = 'temp';
        },
        resetActiveGraphIndex: (state) => {
            state.activeGraphIndex = 0;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setActiveMenu, setActiveGraphIndex, resetActiveMenu, resetActiveGraphIndex } = activeMenuSlice.actions

export default activeMenuSlice.reducer