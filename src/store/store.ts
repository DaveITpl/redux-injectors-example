import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";

const createCustomStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
      ...injectedReducers,
      nonInjectedReducer: () => ({})
      // other non-injected reducers can go here...
    });

    return rootReducer;
  }

  const injectorsEnhancer = createInjectorsEnhancer({
    createReducer: createReducer,
    runSaga: sagaMiddleware.run
  });
  const enhancers = [injectorsEnhancer];

  const store = configureStore({
    reducer: createReducer(),
    enhancers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([sagaMiddleware]),
    devTools: {
      shouldHotReload: false
    }
  });
  return store;
};

export const store = createCustomStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
