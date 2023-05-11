import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FreeShopProvider } from "./context/FreeShopProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<FreeShopProvider>
				<App />
			</FreeShopProvider>
		</ChakraProvider>
	</React.StrictMode>
);
