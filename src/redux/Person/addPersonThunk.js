// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AddPersonThunk = createAsyncThunk(
    'AddPersonThunk',
     async (person) => {
        const response = await fetch(`https://localhost:7270/api/Person/Add`,
        {
            method:'POST',
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
       throw new Error("error, cant add person!") 
    }

)