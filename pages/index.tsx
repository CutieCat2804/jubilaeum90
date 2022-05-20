import {
  Box,
  Text,
  Image,
  Link,
  Grid,
  GridItem,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import Button from "../components/Button";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import Modal from "../components/Modal";
import PageHead from "../components/PageHead";
import { useCountdown } from "../hooks/useCountdown";
import { images } from "../imageData";

export default function Home() {
  let { imageCount, countdown } = useCountdown();
  const day = `Tag ${imageCount}`;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div>
      <PageHead title="Startseite" />
      <ContentBox>
        <Box flexDirection="row">
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
        </Box>
        <Text as="h2" textStyle="heading-m" marginTop="24px">
          Der Stamm Malteser feiert sein 90-jähriges Jubiläum!
        </Text>
        <Text maxWidth="980px" textStyle="text-s-bold" marginTop="20px">
          Wir feiern und das erwartet euch an diesem Tag:
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gridGap={8}
          marginTop="8px"
          maxWidth="1000px"
        >
          <GridItem>
            <Text textStyle="text-s-bold">Freitag</Text>
            <Text textStyle="text-2xs" fontWeight="bold">
              20. Mai
            </Text>
            <List textStyle="text-2xs">
              <ListItem> Nachmittags Aufbau</ListItem>
              <ListItem> Abends Gemütliche Lagerfeuerrunde</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <Text textStyle="text-s" fontWeight="bold">
              Samstag
            </Text>
            <Text textStyle="text-2xs" fontWeight="bold">
              21. Mai
            </Text>
            <List textStyle="text-2xs">
              <ListItem> 10 Uhr Gottesdienst in Hl. Dreikönige</ListItem>
              <ListItem> 11 Uhr Festakt</ListItem>
              <ListItem>
                Anschließend Imbiss, Kaffee, Kuchen und Workshops
              </ListItem>
              <ListItem>
                <Link
                  onClick={onOpen}
                  textDecoration="underline"
                  textStyle="text-2xs"
                  fontWeight="bold"
                >
                  Details
                </Link>
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  src="/Programm.png"
                  alt="Programm"
                />
              </ListItem>
            </List>
          </GridItem>
          <GridItem>
            <Text textStyle="text-s" fontWeight="bold">
              Sonntag
            </Text>
            <Text textStyle="text-2xs" fontWeight="bold">
              22. Mai
            </Text>
            <List textStyle="text-2xs">
              <ListItem> 90 Lilien in Neuss</ListItem>
              <ListItem> Tag für Stammesmitglieder</ListItem>
            </List>
          </GridItem>
        </Grid>
        <Button label="Zur Anmeldung" url="/anmeldung" />
        <Text textStyle="text-s" marginTop="24px">
          Bei Fragen, Geschichten, Anekdoten und Grußbotschaften könnt ihr uns
          gerne eine Mail senden an{" "}
          <a href="mailto:jubilaeum@90-malteser.de">jubilaeum@90-malteser.de</a>
        </Text>
        <Box as="h1" textStyle="heading-l-uppercase" marginTop="40px">
          Jubiläums Countdown
          <Text fontSize="124px" lineHeight="75%" marginTop="24px">
            {countdown}
            <Text display="inline-block" marginLeft="16px " fontSize="92px">
              Tage
            </Text>
          </Text>
        </Box>
        <Box marginTop="96px">
          <Text as="h1" textStyle="heading-l-uppercase">
            Bild des Tages
          </Text>

          <Text textStyle="text-m" width="100%" maxWidth="850px">
            90 Tage vor dem Jubiläum haben wir unsere Fotochallenge begonnen.
            Jeden Tag posten wir hier und auf Social Media ein Bild
          </Text>
          {images[imageCount] && (
            <GalleryImage
              src={images[imageCount - 1].src}
              alt={day}
              caption={images[imageCount - 1].caption}
              textStyle="text-xs"
              day={day}
            />
          )}
          <Button label="Zur Bildergalerie" url="/galerie" />
        </Box>
        <Footer />
      </ContentBox>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
