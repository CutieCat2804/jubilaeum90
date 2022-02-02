import { Text, Grid, GridItem, Spacer } from "@chakra-ui/react";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import PageHead from "../components/PageHead";
import { useCountdown } from "../hooks/useCountdown";
import { images } from "../imageData";

export default function Galerie() {
  let { imageCount } = useCountdown();

  if (
    typeof location !== "undefined" &&
    location.search.toLowerCase().includes("showallimages")
  ) {
    imageCount = 90;
  }

  return (
    <div>
      <PageHead title="Galerie" />
      <ContentBox>
        <Text as="h1" textStyle="heading-l-uppercase" marginY="40px">
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
          {images.slice(0, imageCount).map((image, index) => {
            const day = "Tag " + (index + 1);

            return (
              <GridItem width="100%" key={index}>
                <Text
                  as="h2"
                  textStyle="text-s"
                  marginBottom="8px"
                  textAlign="center"
                >
                  {day}
                </Text>
                <GalleryImage
                  src={image.src}
                  alt={day}
                  caption={image.caption}
                />
              </GridItem>
            );
          })}
        </Grid>
        <Footer />
      </ContentBox>
    </div>
  );
}
