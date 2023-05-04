import { Box, Flex } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./Pages/LandingPage/LandingPage";

export function App() {
  return (
    <>
      <NavBar />

      <Flex justify="center" backgroundColor="#FFF0F0">
        <LandingPage />
      </Flex>
    </>
  );
}
