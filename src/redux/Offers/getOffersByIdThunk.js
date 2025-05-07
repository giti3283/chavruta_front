import { createAsyncThunk} from "@reduxjs/toolkit"
export const getOffersByIdThunk = createAsyncThunk(
    'getOffersByIdThunk',
    async(id) => {
      
            const response = await fetch(`https://localhost:7270/api/Person/GetOffers/${id}`);
    
            if(response.ok){
                const data = await response.json();
               
                return data;
           }
           else 
           throw new Error("error, cant get offers By id!") 
        }
);