// בס"ד
import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeletePersonThunk = createAsyncThunk(
    'DeletePersonThunk',
    async (id) => {
        const response = await fetch(`https://localhost:7270/api/Person/Delete/${id}`,
            {
                method: 'DELETE'
            });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else
            throw new Error("error, cant delete person!")
    }

);



