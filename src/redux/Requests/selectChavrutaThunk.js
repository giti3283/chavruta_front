
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const SelectChavrutaThunk = createAsyncThunk(
//     'SelectChavrutaThunk',
//     async (requestCode,chavrutaCode,scheduleCode, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`https://localhost:7270/api/Requests/SelectChavruta/${requestCode}/${chavrutaCode}/${scheduleCode}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 const errorData = await response.text();
//                 return rejectWithValue(`שגיאה בקבלת נתונים: ${errorData}`);
//             }

//             const data = await response.json();
//             console.log("נתוני חברותא שהתקבלו:", data);
            
//             // בדיקה שהנתונים אכן מכילים את המבנה הצפוי
//             if (!data || !Array.isArray(data)) {
//                 return rejectWithValue("התקבלו נתונים לא תקינים מהשרת");
//             }
            
//             return data;
//         } catch (error) {
//             console.error("שגיאה בשליפת נתוני חברותא:", error);
//             return rejectWithValue(error.message || "שגיאה בשליפת נתוני חברותא");
//         }
//     }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SelectChavrutaThunk = createAsyncThunk(
    'SelectChavrutaThunk',
    async ({ requestCode, chavrutaCode, scheduleCode }) => {
        try {
            const response = await fetch(`https://localhost:7270/api/Requests/SelectChavruta/${requestCode}/${chavrutaCode}/${scheduleCode}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error("שגיאה בקבלת נתונים:", errorData);
                // return rejectWithValue(`שגיאה בקבלת נתונים: ${errorData}`);
            }

            const data = await response.json();
            console.log("נתוני חברותא שהתקבלו:", data);
            
            // בדיקה שהנתונים אכן מכילים את המבנה הצפוי
            if (!data) {
                console.error("התקבלו נתונים לא תקינים מהשרת");
                // return rejectWithValue("התקבלו נתונים לא תקינים מהשרת");
            }
            
            return data;
        } catch (error) {
            console.error("שגיאה בשליפת נתוני חברותא:", error);
            // return rejectWithValue(error.message || "שגיאה בשליפת נתוני חברותא");
        }
    }
);