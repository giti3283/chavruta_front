// בס"ד
import { createSlice } from "@reduxjs/toolkit";
import { GetChavrutaThunk } from "./getChavrutaThunk";

const initialState = {
    matches: [],
    loading: false,
    error: null,
    selectedMatch: null,
    filters: {
        subject: null,
        book: null,
        mode: null,
        day: null
    }
};

export const chavrutaSlice = createSlice({
    name: "chavruta",
    initialState,
    reducers: {
        setSelectedMatch: (state, action) => {
            state.selectedMatch = action.payload;
        },
        clearSelectedMatch: (state) => {
            state.selectedMatch = null;
        },
        setFilter: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {
                subject: null,
                book: null,
                mode: null,
                day: null
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetChavrutaThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetChavrutaThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.matches = action.payload;
                console.log(state.matches)
            })
            .addCase(GetChavrutaThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "שגיאה בטעינת נתוני חברותא";
            });
    }
});

export const { setSelectedMatch, clearSelectedMatch, setFilter, clearFilters } = chavrutaSlice.actions;
export default chavrutaSlice.reducer;
