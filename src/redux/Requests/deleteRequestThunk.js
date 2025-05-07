// בס"ד

import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteRequestThunk = createAsyncThunk(
    'DeleteRequestThunk',
    async (code) => {
        const response = await fetch(`https://localhost:7270/api/Requests/Delete/${code}`,
            { method: 'DELETE' }
        );
        const data = await response.json();
        return data;
    }
)