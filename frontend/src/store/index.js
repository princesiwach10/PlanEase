import miscReducer from "./reducer/misc";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    misc: miscReducer,
  },
});
