import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetOfferByCodeThunk = createAsyncThunk(
    'GetOfferByCodeThunk',
    async (code) => {
        const response = await fetch(`https://localhost:7270/api/Offers/GetByCode/${code}`);

        if(response.ok){
            const data = await response.json();
           
            return data;
       }
       else 
       throw new Error("error , cant get offer by code!") 
    }
)