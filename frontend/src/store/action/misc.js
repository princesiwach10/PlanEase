import { changeDarkMode } from "../reducer/misc";

export const toggleThemeMode =
  (callback = null) =>
  (dispatch) => {
    dispatch(changeDarkMode());
    callback?.();
  };
