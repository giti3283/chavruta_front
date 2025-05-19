import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetScheduleByCodeThunk = createAsyncThunk(
    'GetScheduleByCodeThunk',
    async (code) => {
        const response = await fetch(`https://localhost:7270/api/Schedule/GetByCode/${code}`);

        if(response.ok){
            const data = await response.json();
           
            return data;
       }
       else 
       throw new Error("error , cant get Schedule by code!") 
    }
)