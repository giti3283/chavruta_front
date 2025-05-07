// בס"ד
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { personSlice } from './Person/personSlice'
import { offersSlice } from './Offers/offersSlice'
import { requestsSlice } from './Requests/requestsSlice'
import { scheduleSlice } from './Schedule/scheduleSlice'
import { chavrutaSlice} from './Requests/chavrutaSlice'

const reducers = combineSlices(personSlice, requestsSlice, offersSlice, scheduleSlice , chavrutaSlice)

export const STORE = configureStore({
     reducer: reducers,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: false,
     })
})

   
 