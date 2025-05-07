// בס"ד

import {createSlice} from '@reduxjs/toolkit'
import { GetPersonThunk } from './getPersonThunk'
import { AddPersonThunk } from './addPersonThunk';
import { GetByIdThunk } from './getByIdThunk';
import { DeletePersonThunk } from './deletePersonThunk';
import { UpdatePersonThunk } from './updatePersonThunk';
// import { getOffersByIdThunk } from './getOffersByIdThunk';
// import { GetRequestsByIdThunk } from './getRequestsByIdThunk';

const INITIAL_STATE = {
    list:[],
    people:[],
    person:{id:'',firstName:'',lastName:'', birthDate:'',gender:'', status:'',cellularTelephone:'',telephone:'',country:'',city:'',email:'',role:'',denomination:'generic'},
    isExist:null
}
export const personSlice = createSlice({
    name:'people',
    initialState:INITIAL_STATE,
    reducers:{

    },
    extraReducers:(builder) => {
        //getPerson
        builder.addCase(GetPersonThunk.fulfilled,(state,action) => {
            state.people = action.payload;
        });
        //getById
        builder.addCase(GetByIdThunk.fulfilled,(state,action) => {
            //state.people = action.payload;//הורס בקבלת הצעות/בקשות
            state.person = action.payload;
            state.isExist = true
        });
        builder.addCase(GetByIdThunk.rejected,(state,action) => {
            state.isExist = false
        });
        //addPerson
        builder.addCase(AddPersonThunk.fulfilled,(state,action) => {
            state.people = action.payload;
        });
        //deletePerson
         builder.addCase(DeletePersonThunk.fulfilled,(state,action) => {
            state.people = action.payload;
        });
         //updatePerson
         builder.addCase(UpdatePersonThunk.fulfilled,(state,action) => {
            state.people = action.payload;
        });
        //  //getOffersById
        //  builder.addCase(getOffersByIdThunk.fulfilled,(state,action) => {
        //     state.list = action.payload;
        //     state.person = action.payload;
        // });
        //  //getRequestsById
        //  builder.addCase(GetRequestsByIdThunk.fulfilled,(state,action) => {
        //     state.list = action.payload;
        //     state.person = action.payload;
        // });
    }
})
