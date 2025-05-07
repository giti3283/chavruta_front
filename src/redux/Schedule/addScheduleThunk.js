import { createAsyncThunk } from "@reduxjs/toolkit";
// available
// : 
// "true"
// code
// : 
// ""
// dayInWeek
// : 
// "wed"
// fromTime
// : 
// "15:40:00"
// personId
// : 
// "215555426"
// toTime
// : 
// "15:40:00"
// {
//     "code": 2,
//     "dayInWeek": "thu",
//     "fromTime": "19:40:00",
//     "toTime": "22:00:00",
//     "available": true,
//     "personId": "218055403"
//   }
export const AddScheduleThunk = createAsyncThunk(
    'AddScheduleThunk',
     async (schedule) => {
      

        const response = await fetch(`https://localhost:7270/api/Schedule/Add`,
        {
            method:'POST',
            body:JSON.stringify(schedule),
            headers:{
                'Content-type': 'application/json'
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
       }
       else 
       throw new Error("error, cant add Schedule!") 
    }

)