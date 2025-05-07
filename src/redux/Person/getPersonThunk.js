// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPersonThunk = createAsyncThunk(
    'GetPersonThunk',
    async () => {
        const response = await fetch(`https://localhost:7270/api/Person/GetAll`);

        if(response.ok){
            const data = await response.json();
           
            return data;
       }
       else 
       throw new Error("error, cant get person !") 
    }
)