import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopSearched } from "../api";

export interface TopSearchedCat {
  name: string;
  id: string;
  description: string;
  image: string;
}

export const fetchTopSearched = createAsyncThunk<TopSearchedCat[]>(
  "topSearched/fetchTopSearched",
  async (payload, thunkAPI) => {
    return getTopSearched();
  }
);

const topSearchSlice = createSlice({
  name: "topSearched",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchTopSearched.fulfilled as any]: (state, action) => action.payload,
  },
});

const { reducer } = topSearchSlice;

export default reducer;
