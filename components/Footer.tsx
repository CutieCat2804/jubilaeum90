import { Flex, Link, Spacer, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <Spacer />
      <Flex
        marginTop="40px"
        paddingTop="20px"
        borderTop="1px solid #888888"
        justifyContent="center"
        justifySelf="bottom"
        width="100%"
      >
        <Text textStyle="text-2xs">
          <Link
            _focus={{ boxShadow: "none" }}
            isExternal
            marginRight="16px"
            href="https://www.instagram.com/dpsgmalteser/"
          >
            Instagram
          </Link>
          |
          <Link
            _focus={{ boxShadow: "none" }}
            isExternal
            marginX="16px"
            href="https://www.facebook.com/dpsgmalteserneuss/"
          >
            Facebook
          </Link>
          |
          <Link
            _focus={{ boxShadow: "none" }}
            marginLeft="16px"
            href="/impressum"
          >
            Impressum
          </Link>
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
