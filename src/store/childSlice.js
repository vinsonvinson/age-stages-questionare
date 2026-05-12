import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    age: "",
    gender: "", // 'laki-laki' atau 'perempuan'
    childInMonths: null,
    score: 0,
};

export const childSlice = createSlice({
    name: "child",
    initialState,
    reducers: {
        updateField: (state, action) => {
            // action.payload akan berisi object seperti { field: 'name', value: 'Budi' }
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetForm: () => initialState,
    },
});

export const { updateField } = childSlice.actions;
export default childSlice.reducer;
