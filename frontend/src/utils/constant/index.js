import { theme } from "antd";

const { darkAlgorithm } = theme;

export const lightTheme = {
  token: {
    colorPrimary: "#00d09c",
  },
  components: {
    Layout: {
      colorBgLayout: "#ffffff",
    },
    Button: {
      colorBgContainer: "#ffffff",
      colorText: "#303030",
    },
  },
};

export const darkTheme = {
  algorithm: darkAlgorithm,
  token: {
    colorPrimary: "#0abb92",
  },
  components: {
    Layout: {
      colorBgLayout: "#303030",
    },
    Button: {
      colorBgContainer: "#303030",
      colorText: "#ffffff",
    },
  },
};
