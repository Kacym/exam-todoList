import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const getData = createAsyncThunk("getData", async () => {
  const response = (await axios.get(url)).data;
  return response;
});

export const createData = createAsyncThunk("createData", async (newData) => {
  const response = (await axios.post(url, newData)).data;
  return response;
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  const response = (await axios.delete(`${url}/${id}`)).data;
  return response;
});

export const updateData = createAsyncThunk("updateData", async (data) => {
  const response = (
    await axios.patch(`${url}/${data._id}`, { isCompleted: !data.isCompleted })
  ).data;
  return response;
});

const todoReducer = createSlice({
  name: "todo-reducer",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload);
    });
    builder.addCase(getData.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default todoReducer.reducer;
