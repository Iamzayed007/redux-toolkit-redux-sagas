import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    // Define your initial state here
    loading: false,
    users: [],
    error: null,
    test:'ok'
  },
  reducers: {
    // Define your actions and reducers here
    getUsers: (state)=>{
        state.loading= true;
        state.error= null;
    },
    getUsersSuccess: (state,actions)=>{
        state.users= actions.payload;
        state.loading= false;
    },
    getUsersError: (state,actions)=>{
        
        state.loading= false;
        state.error = actions.payload
    },
  },
});
export const {getUsers,getUsersSuccess,getUsersError}= userSlice.actions
export const { actions, reducer } = userSlice;
