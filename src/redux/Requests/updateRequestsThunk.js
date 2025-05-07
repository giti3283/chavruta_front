// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateRequestThunk = createAsyncThunk(
    'UpdateRequestThunk',
    async ({code,request}) => {
        const response = await fetch(`https://localhost:7270/api/requests/Update/${code}`,
        {
            method:'PUT',
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
       throw new Error("error can't update request")
    }
)

