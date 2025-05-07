// בס"ד

import {createSlice} from '@reduxjs/toolkit'
import { GetOffersThunk } from './getOffersThunk'
import { AddOfferThunk } from './addOfferThunk';
import { DeleteOfferThunk } from './deleteOffersThunk';
import { UpdateOfferThunk } from './updateOffersThunk';
import { getOffersByIdThunk } from './getOffersByIdThunk';

const INITIAL_STATE = {
    offers:[],
    offer:{code:0,personId:'',book:'', subject:'',mode:''}
}
export const offersSlice = createSlice({
    name:'offers',
    initialState:INITIAL_STATE,
    reducers:{
        editOffer:(state,action)=>{
            state.offer=action.payload
        },
        resetOffer:(state,action)=>{
            state.offer=null
        }
    },
    extraReducers:(builder) => {
        //getOffer
        builder.addCase(GetOffersThunk.fulfilled,(state,action) => {
            state.offers = action.payload;
        });
      
        //addOffer
        builder.addCase(AddOfferThunk.fulfilled,(state,action) => {
            state.offers = action.payload;
        });

        //deleteOffer
        builder.addCase(DeleteOfferThunk.fulfilled,(state,action) => {
            console.log(action.payload);
            state.offers = action.payload;
        });
        builder.addCase(DeleteOfferThunk.rejected,(state,action) => {
            console.log(action);
        
        });
        //updateOffer
        builder.addCase(UpdateOfferThunk.fulfilled,(state,action) => {
            state.offers = action.payload;
        });
        //getOffersById
        builder.addCase(getOffersByIdThunk.fulfilled,(state,action) => {
            state.offers = action.payload;
        });
    }
})
export const {editOffer,resetOffer} = offersSlice.actions;