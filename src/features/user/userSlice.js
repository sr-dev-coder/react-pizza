import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action) =>{
            state.username = action.payload;
        }
    }
})

export const { username } = userSlice.actions;
export default userSlice.reducer;