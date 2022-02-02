import { Box, Text } from "@chakra-ui/react";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

const Impressum: React.FC = () => {
  return (
    <div>
      <PageHead title="Impressum" />
      <ContentBox>
        <Box align="left" maxWidth="800px">
          <Text as="h1" textStyle="heading-m-uppercase" marginY="40px">
            Impressum
          </Text>
          <Text as="h2" textStyle="text-xs-bold">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </Text>
          <Text textStyle="text-2xs">
            DPSG Stamm Malteser
            <br />
            Simrockstra&szlig;e 2<br />
            41464 Neuss
          </Text>

          <Box>
            <Text textStyle="text-xs-bold" marginTop="12px">
              Vertreten durch:
            </Text>
            <Text textStyle="text-2xs">
              Natalie Degelmann
              <br />
              Christoph Kreuer
              <br />
              Moritz Rudolf
            </Text>
          </Box>

          <Text as="h2" textStyle="text-xs-bold" marginTop="12px">
            Kontakt
          </Text>
          <Text textStyle="text-2xs">
            Telefon: 01578 0576820
            <br />
            E-Mail: jubilaeum@90-malteser.de
          </Text>

          <Text as="h2" textStyle="text-xs-bold" marginTop="12px">
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </Text>
          <Text textStyle="text-2xs">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </Text>

          <Text textStyle="text-2xs" marginTop="16px">
            Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
          </Text>
        </Box>
        <Footer />
      </ContentBox>
    </div>
  );
};

export default Impressum;
