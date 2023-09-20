import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
  name: 'userDetailsSlice',
  initialState: {
    // Define your initial state here
    loading: false,
    user: [],
    error: null,
  },
  reducers: {
    // Define your actions and reducers here
    getUser: (state)=>{
        state.loading= true;
        state.error= null;
    },
    getUserSuccess: (state,actions)=>{
        state.user= actions.payload;
        state.loading= false;
    },
    getUserError: (state,actions)=>{
        
        state.loading= false;
        state.error = actions.payload
    },
  },
});
export const {getUser,getUserSuccess,getUserError}= userDetailsSlice.actions
// export const { actions, reducer } = userDetailsSlice;
export default userDetailsSlice.reducer
