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
        <Text textStyle="text-xs" marginBottom="16px">
          {`Jeden Tag wird es jetzt ein Foto aus der 90jährigen Geschichte des
          Stammes geben, um die Vorfreude auf unser Jubiläums-Wochenende zu
          steigern. Lasst Euch überraschen 😊`}
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          rowGap={10}
          columnGap={6}
        >
          {images
            .slice(0, imageCount + 1)
            .map((image, index) => {
              const day = "Tag " + (index + 1);

              return (
                <GridItem width="100%" key={index}>
                  <Text as="h2" textStyle="text-s" textAlign="center">
                    {day}
                  </Text>
                  <GalleryImage
                    src={image.src}
                    alt={day}
                    caption={image.caption}
                    day={day}
                  />
                </GridItem>
              );
            })
            .reverse()}
        </Grid>
        <Footer />
      </ContentBox>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
