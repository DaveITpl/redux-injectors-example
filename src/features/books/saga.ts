import { bookSlice } from "./slice";
import { takeLatest, put } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { bookService } from "./service";

function* fetchBooksWorker(action: PayloadAction<string>) {
  try {
    const { data } = yield bookService.getBooks(action);
    yield put(bookSlice.actions.fetchBooksSuccess(data));
  } catch (e) {
    yield put(bookSlice.actions.fetchBooksFailed());
    // notification and handling errors
  }
}

export function* sagaWatcher() {
  yield takeLatest(bookSlice.actions.fetchBooks, fetchBooksWorker);
}
