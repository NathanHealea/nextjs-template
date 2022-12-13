import {
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector,
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './redux.types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useReactReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> =
  useReactReduxSelector;
