import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateScheduleThunk = createAsyncThunk(
    'UpdateScheduleThunk',
    async ({code,Schedule}) => {
        const response = await fetch(`https://localhost:7270/api/Schedule/Update/${code}`,
        {
            method:'PUT',
            body:JSON.stringify(Schedule),
            headers:{
                'Content-type': 'application/json'
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
       }
       else 
       throw new Error("error can't update Schedule")
    }
)
