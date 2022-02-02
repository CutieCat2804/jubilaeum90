import { Box, Flex } from "@chakra-ui/react";

const ContentBox: React.FC = (props) => {
  const { children } = props;

  return (
    <Box backgroundColor="background" width="100%" minHeight="100vh">
      <Flex
        align="center"
        textAlign="center"
        paddingTop="28px"
        width={{ base: "100%", xl: "1200px" }}
        backgroundColor="background-inverse"
        margin="auto"
        minHeight="100vh"
        boxShadow="-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
        paddingX="24px"
        paddingBottom="56px"
        flexDirection="column"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default ContentBox;
