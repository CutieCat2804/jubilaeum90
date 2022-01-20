import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import Head from "next/head";
import useCountdown from "react-hook-final-countdown";
import { images } from "../imageData";

export default function Home() {
  const countdown = Math.floor(
    useCountdown(new Date(2022, 4, 21).valueOf(), 1000) / 1000 / 60 / 60 / 24
  );

  let imageCount = Math.max(0, 90 - countdown) + 1;

  if (
    typeof location !== "undefined" &&
    location.search.toLowerCase().includes("showallimages")
  ) {
    imageCount = 90;
  }

  return (
    <div>
      <Head>
        <title>Galerie</title>
        <meta name="description" content="Galerie" />
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
            fontSize={{ base: "32px", sm: "40px" }}
            lineHeight="145%"
            textTransform="uppercase"
            color="#092955"
            marginY="40px"
            fontWeight="bold"
          >
            Bildergalerie
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {images.slice(0, imageCount).map((image, index) => (
              <GridItem width="100%" key={index}>
                <Text
                  as="h2"
                  fontSize="24px"
                  lineHeight="145%"
                  textTransform="uppercase"
                  color="#092955"
                  marginBottom="8px"
                  fontWeight="bold"
                >
                  {"Tag " + (index + 1)}
                </Text>
                <AspectRatio maxW="400px" ratio={1}>
                  <Image
                    src={image.src}
                    alt=""
                    align="center"
                    border="5px solid #092955"
                  />
                </AspectRatio>
                <Text fontSize="16px" width="100%" marginTop="20px">
                  {image.content}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
