import { createSlice } from "@reduxjs/toolkit";
import { ActiveRequest } from "./types";

const initialState: ActiveRequest = {
  skip: true,
};

const activeRequestSlice = createSlice({
  name: "activeRequest",
  initialState,
  reducers: {
    switchActiveRequest: (state) => {
      state.skip = !state.skip;
    },
  },
});

const { switchActiveRequest } = activeRequestSlice.actions;

export { activeRequestSlice, switchActiveRequest };
