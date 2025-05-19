import { createSlice } from "@reduxjs/toolkit";
import { SelectChavrutaThunk } from "./selectChavrutaThunk";
const initialState = {
    selectedChavruta: null,
    loading: false,
    error: null
  };
  
 export const selChavrutaSlice = createSlice({
    name: 'chavruta',
    initialState,
    reducers: {
      // רדיוסרים רגילים כאן
    },
    extraReducers: (builder) => {
      builder
        .addCase(SelectChavrutaThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(SelectChavrutaThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.selectedChavruta = action.payload;
        })
        .addCase(SelectChavrutaThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Error selecting chavruta';
        });
    }
  });
  
  export default selChavrutaSlice.reducer;