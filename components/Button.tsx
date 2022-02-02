import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  url?: string;
  type?: "submit";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, url, type } = props;

  return (
    <ChakraButton
      type={type}
      as={type == "submit" ? undefined : "a"}
      href={url}
      marginTop="40px"
      backgroundColor="cta"
      color="inverse"
      borderRadius="5px"
      height="52px"
      minWidth="200px"
      fontSize="20px"
      paddingX="12px"
      _hover={{ background: "cta-hover" }}
      _focus={{ background: "cta-focus" }}
      _active={{ background: "cta-active" }}
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
