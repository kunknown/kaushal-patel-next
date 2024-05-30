import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/projects/practice/memo/testSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
