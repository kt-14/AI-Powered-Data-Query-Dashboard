import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  result: null,
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    submitQuery: (state) => {
      state.loading = true;
      state.error = null;
    },
    setQueryResult: (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.history.push(action.payload.query);
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, setQueryResult, setError } = querySlice.actions;
export default querySlice.reducer;
