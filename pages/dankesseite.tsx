import { Text } from "@chakra-ui/react";
import Button from "../components/Button";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

export default function Dankesseite() {
  return (
    <div>
      <PageHead title="Dankesseite" />
      <ContentBox>
        <Text as="h1" textStyle="heading-m" marginTop="24px">
          Vielen Danke für die Anmeldung.
        </Text>
        <Text as="h1" textStyle="heading-m" marginTop="24px">
          Sie wurden erfolgreich angemeldet.
        </Text>
        <Button label=" Zurück zur Startseite" url="/" />
        <Footer />
      </ContentBox>
    </div>
  );
}
