import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { bookSlice, initialState } from "./slice";
import { useAppDispatch, useAppSelector } from "../../store/utilHooks";
import { BookState } from "./types";
import { bindActionCreators } from "@reduxjs/toolkit";
import { sagaWatcher } from "./saga";

export const useBookManager = () => {
  const { reducer, actions, name } = bookSlice;
  useInjectReducer({ key: name, reducer: reducer });
  useInjectSaga({ key: name, saga: sagaWatcher });
  const state =
    useAppSelector<{ [name]: BookState }>((state) => state.bookState) ||
    initialState;

  return { state, actions: bindActionCreators(actions, useAppDispatch()) };
};
