// ***************************************
// import { createAsyncThunk } from "@reduxjs/toolkit"
// export const GetChavrutaThunk = createAsyncThunk(
//     'GetChavrutaThunk',
//     async (code) => {

//         const response = await fetch(`https://localhost:7270/api/Requests/GetChavruta/${code}`);

//         if (response.ok) {
//             const data = await response.json();

//             return data;
//         }
//         else
//             throw new Error("error, cant get chavruta by code!")
//     }
// );


// *********************************
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetChavrutaThunk = createAsyncThunk(
    'GetChavrutaThunk',
    async (code, { rejectWithValue }) => {
        try {
            // הוספת timeout כדי לתת לשרת זמן להגיב
            const response = await fetch(`https://localhost:7270/api/Requests/GetChavruta/${code}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.text();
                return rejectWithValue(`שגיאה בקבלת נתונים: ${errorData}`);
            }

            const data = await response.json();
            console.log("נתוני חברותא שהתקבלו:", data);
            
            // בדיקה שהנתונים אכן מכילים את המבנה הצפוי
            if (!data || !Array.isArray(data)) {
                return rejectWithValue("התקבלו נתונים לא תקינים מהשרת");
            }
            
            return data;
        } catch (error) {
            console.error("שגיאה בשליפת נתוני חברותא:", error);
            return rejectWithValue(error.message || "שגיאה בשליפת נתוני חברותא");
        }
    }
);
