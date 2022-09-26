import { useDispatch, useSelector } from "react-redux";
import { EqualityFn } from "react-redux/es/types";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = <CustomState = RootState>(
  selector: (state: RootState & CustomState) => CustomState[keyof CustomState],
  equalityFn?: EqualityFn<CustomState[keyof CustomState]> | undefined
): CustomState[keyof CustomState] => useSelector(selector, equalityFn);
