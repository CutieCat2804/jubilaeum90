import { Box, Button, Text, Image, AspectRatio } from "@chakra-ui/react";
import Head from "next/head";
import useCountdown from "react-hook-final-countdown";
import { images } from "../imageData";

export default function Home() {
  const countdown = Math.floor(
    useCountdown(new Date(2022, 4, 21, 1, 0, 0, 0).valueOf(), 1000) /
      1000 /
      60 /
      60 /
      24
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
          <Image
            display="inline"
            marginRight={{ base: "32px", sm: "48px", md: "64px" }}
            alt="Stammeslogo"
            src="/Stammeslogo.jpg"
            width={{ base: "120px", sm: "160px", md: "210px" }}
            height={{ base: "120px", sm: "160px", md: "210px" }}
          />

          <Image
            display="inline"
            alt="90Jahre"
            src="/Jubiläum90.png"
            width={{ base: "151.25px", sm: "206.25px", md: "275px" }}
            height={{ base: "110px", sm: "150px", md: "200px" }}
          />
          <Text
            as="h2"
            fontSize="32px"
            color="#092955"
            marginTop="24px"
            fontWeight="bold"
          >
            Der Stamm Malteser feiert sein 90-jähriges Jubiläum!
          </Text>
          <Text
            maxWidth="980px"
            marginTop="16px"
            color="#092955"
            fontSize="20px"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
          <Button
            as="a"
            href="/anmeldung"
            marginTop="40px"
            backgroundColor="#841a1a"
            color="#ffffff"
            borderRadius="5px"
            height="52px"
            width="200px"
            fontSize="20px"
            _hover={{ background: "#5e1212" }}
            _focus={{ background: "#841a1a" }}
            _active={{ background: "#5e1212" }}
          >
            Zur Anmeldung
          </Button>
          <Box
            as="h1"
            fontSize="40px"
            lineHeight="145%"
            textTransform="uppercase"
            color="#092955"
            marginTop="40px"
            fontWeight="bold"
          >
            Jubiläums Countdown
            <Text fontSize="124px" lineHeight="75%" marginTop="24px">
              {countdown}
              <Text display="inline-block" marginLeft="16px " fontSize="92px">
                Tage
              </Text>
            </Text>
          </Box>
          <Box color="#092955" marginTop="96px">
            <Text
              as="h1"
              fontSize="40px"
              lineHeight="145%"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Bild des Tages
            </Text>

            <Text fontSize="28px" width="100%" maxWidth="850px">
              90 Tage vor dem Jubiläum haben wir unsere Fotochallenge begonnen.
              Jeden Tag posten wir hier und auf Social Media ein Bild
            </Text>
            <AspectRatio maxW="400px" ratio={1} marginTop="32px">
              <Image
                src={images[imageCount].src}
                alt="platzhalterbild"
                align="center"
                border="5px solid #092955"
              />
            </AspectRatio>
            <Text
              fontSize="20px"
              width="100%"
              maxWidth="750px"
              marginTop="20px"
            >
              {images[imageCount].content}
            </Text>
            <Button
              as="a"
              href="/galerie"
              marginTop="40px"
              backgroundColor="#841a1a"
              color="#ffffff"
              borderRadius="5px"
              height="52px"
              width="200px"
              fontSize="20px"
              _hover={{ background: "#5e1212" }}
              _focus={{ background: "#841a1a" }}
              _active={{ background: "#5e1212" }}
            >
              Zur Bildergalerie
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
