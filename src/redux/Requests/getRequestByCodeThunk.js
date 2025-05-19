import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetRequestByCodeThunk = createAsyncThunk(
    'GetRequestByCodeThunk',
    async (code) => {
        const response = await fetch(`https://localhost:7270/api/Requests/GetByCode/${code}`);

        if(response.ok){
            const data = await response.json();
           
            return data;
       }
       else 
       throw new Error("error , cant get request by code!") 
    }
)