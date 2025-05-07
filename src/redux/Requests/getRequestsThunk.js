// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetRequestsThunk = createAsyncThunk(
    'GetRequestsThunk',
    async () => {
        const response = await fetch(`https://localhost:7270/api/Requests/GetAll`);

        if(response.ok){
            const data = await response.json();
           
            return data;
       }
       else 
       throw new Error("error , cant get request !") 
    }
)