import { createAsyncThunk} from "@reduxjs/toolkit"
export const GetRequestsByIdThunk = createAsyncThunk(
    'GetRequestsByIdThunk',
    async(id) => {
      
            const response = await fetch(`https://localhost:7270/api/Person/GetRequests/${id}`);
    
            if(response.ok){
                const data = await response.json();
                return data;
           }
           else 
           throw new Error("error, cant get request By id!") 
        }
);