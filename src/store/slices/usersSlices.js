import { createSlice } from "@reduxjs/toolkit";

const usersSlices = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = usersSlices.reducer;
