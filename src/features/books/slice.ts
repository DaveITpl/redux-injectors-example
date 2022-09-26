import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookState } from "./types";

export const initialState: BookState = {
  books: { items: [], isLoading: false }
};

export const bookSlice = createSlice({
  name: "bookState",
  initialState,
  reducers: {
    fetchBooks: (state, action: PayloadAction<string>) => {
      state.books = { isLoading: true, items: [] };
    },
    fetchBooksSuccess: (
      state,
      { payload }: PayloadAction<typeof initialState.books>
    ) => {
      state.books = { ...payload, isLoading: false };
    },
    fetchBooksFailed: (state) => {
      state.books = { isLoading: false, items: [] };
    }
  }
});
