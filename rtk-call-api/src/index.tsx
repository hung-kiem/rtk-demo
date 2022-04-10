import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";

const rootElement = document.getElementById("root");
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  rootElement
);
