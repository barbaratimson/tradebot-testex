import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import timeRangeSlice from "./timeRangeSlice.ts";

export const store = configureStore({
    reducer:{
        timeRange: timeRangeSlice
    }
});

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch