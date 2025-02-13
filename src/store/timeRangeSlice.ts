import {createSlice, current, PayloadAction} from "@reduxjs/toolkit"

const savedTimeRange = localStorage.getItem("time_range")

export type timeRange = "24h" | "7d" | "30d" | "60d" | "90d" | "all_time"
export interface TimeRangeState {
    selectedTimeRange: timeRange
}
const initialState: TimeRangeState = {
    selectedTimeRange: "24h"
}


const TimeRange = createSlice({
    name: 'TimeRange',
    initialState,
    reducers:{
        setTimeRange(state, action:PayloadAction<timeRange>) {
            state.selectedTimeRange = action.payload
        }
    },

})

export const { setTimeRange } = TimeRange.actions
export default TimeRange.reducer