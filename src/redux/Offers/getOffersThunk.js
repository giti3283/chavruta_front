// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetOffersThunk = createAsyncThunk(
    'GetOffersThunk',
    async () => {
        const response = await fetch(`https://localhost:7270/api/Offers/GetAll`);

        if(response.ok){
            const data = await response.json();
            return data;
       }
       else 
       throw new Error("error can't get offers") 
    }
)