import {
  Box,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  day?: string;
  alt: string;
  src: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, day, alt, src } = props;

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text textStyle="text-s">{day}</Text>
        </ModalHeader>
        <ModalCloseButton
          color="primary"
          fontSize="16px"
          top="1rem"
          right="1rem"
        />
        <ModalBody padding="20px">
          <Box margin="8px auto 0">
            <Image
              maxHeight="70vh"
              margin="auto"
              src={src}
              alt={alt}
              align="center"
              // @ts-ignore
              objectFit="contain !important"
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
