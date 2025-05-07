// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AddOfferThunk = createAsyncThunk(
    'AddOfferThunk',
     async (offer) => {
        const response = await fetch(`https://localhost:7270/api/Offers/Add`,
        {
            method:'POST',
            body:JSON.stringify(offer),
            headers:{
                'Content-type': 'application/json'
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
       }
       else 
       throw new Error("error, cant add offer!") 
    }

)