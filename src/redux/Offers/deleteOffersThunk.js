// בס"ד

import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteOfferThunk = createAsyncThunk(
    'DeleteOfferThunk',
    async (code) => {
        const response = await fetch(`https://localhost:7270/api/Offers/DeleteOffer/${code}`,
        {
            method: 'DELETE',
            // mode:"no-cors",
            // headers:{
            //     'Content-type': 'application/json'
            // }
        });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else
        throw new Error("error, cant delete offer!")
}

);
