import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FreeShopProvider } from "./context/FreeShopProvider.jsx";

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#3d3d3d",
				color: "white",
			},
		},
	},
	colors: {
		transparent: "transparent",
		black: "#000",
		white: "#fff",
		gray: {
			50: "#f7fafc",
			900: "#171923",
		},
		main: "#802c6e",
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<FreeShopProvider>
				<App />
			</FreeShopProvider>
		</ChakraProvider>
	</React.StrictMode>
);
