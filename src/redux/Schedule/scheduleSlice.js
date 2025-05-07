 import {createSlice} from '@reduxjs/toolkit'
  import { AddScheduleThunk}from './addScheduleThunk';
import {GetScheduleByIdThunk} from './getScheduleByIdThunk';
 import { DeleteScheduleThunk } from './deleteScheduleThunk';
 import { UpdateScheduleThunk } from './updateScheduleThunk';

const INITIAL_STATE = {
    schedules:[],
    //schedule:{}
    schedule:{code:0,dayInWeek:'' , fromTime :'',toTime :'', available :true,personId:''},
}
export const scheduleSlice = createSlice({
    name:'schedule',
    initialState:INITIAL_STATE,
    reducers:{
        editSchedule:(state,action)=>{
            state.schedule=action.payload
        },
        resetSchedule:(state,action)=>{
            state.schedule=null
        }
    },
    extraReducers:(builder) => {
        //addSchedule
        builder.addCase(AddScheduleThunk.fulfilled,(state,action) => {
            state.schedules = action.payload;
        });
        //deleteSchedule
        builder.addCase(DeleteScheduleThunk.fulfilled,(state,action) => {
            state.schedules  = action.payload;
        });
        //getSchedule
        builder.addCase(GetScheduleByIdThunk.fulfilled,(state,action) => {
            state.schedules  = action.payload;
        });
        //editSchedule
        builder.addCase(UpdateScheduleThunk.fulfilled,(state,action) => {
            state.schedules  = action.payload;
        });
    }
})
 export const {editSchedule,resetSchedule} = scheduleSlice.actions;