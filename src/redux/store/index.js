import { configureStore } from "@reduxjs/toolkit";
import shared from "../slices/shared";

export const store = configureStore({
  reducer: { shared },
});
