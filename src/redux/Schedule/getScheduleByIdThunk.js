import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetScheduleByIdThunk = createAsyncThunk(
    'GetScheduleByIdThunk',
    async (id) => {
        const response = await fetch(`https://localhost:7270/api/Schedule/GetById/${id}`);

        if(response.ok){
            const data = await response.json();
           
            return data;
       }
       else 
       throw new Error("error , cant get Schedule !") 
    }
)