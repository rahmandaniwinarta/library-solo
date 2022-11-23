import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    NIM: null,
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.NIM = action.payload.NIM; //reasign value yg diatas
    },
    logout: (state) => {
      state.value.NIM = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
