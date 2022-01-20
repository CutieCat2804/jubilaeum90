import {
  Box,
  Button,
  Text,
  Image,
  AspectRatio,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import Head from "next/head";
import useCountdown from "react-hook-final-countdown";
import { images } from "../imageData";

export default function Home() {
  const countdown = Math.floor(
    useCountdown(new Date(2022, 4, 21).valueOf(), 1000) / 1000 / 60 / 60 / 24
  );
  let imageCount = Math.max(0, 90 - countdown);

  return (
    <div>
      <Head>
        <title>Startseite</title>
        <meta name="description" content="Startseite" />
        <link rel="icon" href="/lilie.png" />
      </Head>
      <Box backgroundColor="#092955" width="100%" minHeight="100vh">
        <Box
          align="center"
          paddingTop="28px"
          width={{ base: "100%", xl: "1200px" }}
          backgroundColor="#ffffff"
          margin="auto"
          minHeight="100vh"
          boxShadow="-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
          paddingX="24px"
          paddingBottom="64px"
        >
          <Text
            as="h1"
            fontSize="32px"
            color="#092955"
            marginTop="24px"
            fontWeight="bold"
          >
            Vielen Danke für die Anmeldung.
          </Text>
          <Text
            as="h1"
            fontSize="32px"
            color="#092955"
            marginTop="24px"
            fontWeight="bold"
          >
            Sie wurden erfolgreich angemeldet.
          </Text>

          <Button
            as="a"
            href="/"
            marginTop="40px"
            backgroundColor="#841a1a"
            color="#ffffff"
            borderRadius="5px"
            fontSize="20px"
            _hover={{ background: "#5e1212" }}
            _focus={{ background: "#841a1a" }}
            _active={{ background: "#5e1212" }}
          >
            Zurück zur Startseite
          </Button>
        </Box>
      </Box>
    </div>
  );
}
