// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";
export const UpdatePersonThunk = createAsyncThunk(
    'UpdatePersonThunk',
    async ({id,person}) => {
        const response = await fetch(`https://localhost:1234/person/Update/${id}`,
        {
            method:'PUT',
            body:JSON.stringify(person),
            headers:{
                'Content-type': 'application/json'
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
       }
       else 
       throw new Error("error can't update person")
    }
);