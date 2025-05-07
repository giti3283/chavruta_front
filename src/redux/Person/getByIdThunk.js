import { createAsyncThunk} from "@reduxjs/toolkit"
export const GetByIdThunk = createAsyncThunk(
    'GetByIdThunk',
    async(id) => {
      
            const response = await fetch(`https://localhost:7270/api/Person/GetById/${id}`);
    
            if(response.ok){
                const data = await response.json();
               
                return data;
           }
           else 
           throw new Error("error, cant get person By id!") 
        }
);