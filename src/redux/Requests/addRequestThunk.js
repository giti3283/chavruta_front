// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AddRequestsThunk = createAsyncThunk(
    'AddRequestsThunk',
     async (request) => {
        const response = await fetch(`https://localhost:7270/api/Requests/Add`,
        {
            method:'POST',
            body:JSON.stringify(request),
            headers:{
                'Content-type': 'application/json'
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
       }
       else 
       throw new Error("error, cant add Request!") 
    }

)