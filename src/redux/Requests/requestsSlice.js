// בס"ד

import { createSlice } from '@reduxjs/toolkit'
import { GetRequestsThunk } from './getRequestsThunk'
import { AddRequestsThunk } from './addRequestThunk';
import { DeleteRequestThunk } from './deleteRequestThunk';
import { UpdateRequestThunk } from './updateRequestsThunk';
import { GetChavrutaThunk } from './getChavrutaThunk';
import { GetRequestsByIdThunk } from './getRequestsByIdThunk';

const INITIAL_STATE = {
    requests: [],
    request: { code: 0, personId: '', book: '', subject: '', mode: '', chavrutaCode: null },
}
export const requestsSlice = createSlice({
    name: 'requests',
    initialState: INITIAL_STATE,
    reducers: {
        editRequest: (state, action) => {
            state.request = action.payload
        },
        resetRequest: (state, action) => {
            state.request = null
        }
    },
    extraReducers: (builder) => {
        //addRequests
        builder.addCase(AddRequestsThunk.fulfilled, (state, action) => {
            state.requests = action.payload;
        });
        //deleteRequest
        builder.addCase(DeleteRequestThunk.fulfilled, (state, action) => {
            state.requests = action.payload;
        });
        //getRequest
        builder.addCase(GetRequestsThunk.fulfilled, (state, action) => {
            state.requests = action.payload;
        });
        //editRequest
        builder.addCase(UpdateRequestThunk.fulfilled, (state, action) => {
            state.requests = action.payload;
        });
        //getChavruta
        // builder.addCase(GetChavrutaThunk.fulfilled, (state, action) => {
        //     state.chavruta = action.payload
        // });
        // builder.addCase(GetChavrutaThunk.rejected, (state, action) => {
        //     console.log("fail!!!!");
        // });
        //getRequestsById
        builder.addCase(GetRequestsByIdThunk.fulfilled,(state,action) => {
            state.requests = action.payload;
        });
    }
})
export const { editRequest, resetRequest } = requestsSlice.actions;