import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteScheduleThunk = createAsyncThunk(
    'DeleteScheduleThunk',
    async (code) => {
        const response = await fetch(`https://localhost:7270/api/Schedule/Delete/${code}`,
            { method: 'DELETE' }
        );
        const data = await response.json();
        return data;
    }
)