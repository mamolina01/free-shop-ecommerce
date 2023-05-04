import { Flex } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./Pages/LandingPage";

export function App() {
	return (
		<>
			<NavBar />
			<LandingPage />
		</>
	);
}
