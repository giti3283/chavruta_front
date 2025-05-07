// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateOfferThunk = createAsyncThunk(
    'UpdateOfferThunk',
    async (offer) => {
        debugger
        const response = await fetch(`https://localhost:7270/api/Offers/UpdateOffer/${offer.code}`,
        {
            method:'PUT',
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
       throw new Error("error can't update offer")
    }
)

