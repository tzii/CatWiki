import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: "true",
  reducers: {
    setLoading: (state, action) => action.payload,
  },
});

const { actions, reducer } = isLoadingSlice;

export const { setLoading } = actions;
export default reducer;
