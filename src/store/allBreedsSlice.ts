import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBreeds } from "../api";

export const fetchAllBreeds = createAsyncThunk("allBreeds/fetchAllBreed", async (payload, thunkAPI) => {
  return getAllBreeds();
});

const allBreedsSlice = createSlice({
  name: "allBreeds",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllBreeds.fulfilled as any]: (state, action) => action.payload,
  },
});

const { reducer } = allBreedsSlice;

export default reducer;
