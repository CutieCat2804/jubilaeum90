import {
  AspectRatio,
  Box,
  Image,
  OtherProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useCountdown } from "../hooks/useCountdown";
import Modal from "./Modal";

interface GalleryImageProps {
  src: string;
  alt: string;
  caption: string[];
  textStyle?: OtherProps["textStyle"];
  day: string;
}

const GalleryImage: React.FC<GalleryImageProps> = (props) => {
  const { src, alt, caption, textStyle, day } = props;

  const Img = (
    <Image
      maxHeight="70vh"
      margin="auto"
      src={src}
      alt={alt}
      align="center"
      // @ts-ignore
      objectFit="contain !important"
    />
  );

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <AspectRatio
        maxW="400px"
        ratio={1}
        margin="8px auto 0"
        display={{ base: "none", sm: "block" }}
        onClick={onOpen}
      >
        {Img}
      </AspectRatio>
      <Box maxW="400px" margin="8px auto 0" display={{ sm: "none" }}>
        {Img}
      </Box>
      <Box margin="20px auto 0" maxWidth="750px">
        {caption.map((captionPart) => (
          <Text key={captionPart} textStyle={textStyle} textAlign="center">
            {captionPart}
          </Text>
        ))}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} src={src} alt={alt} />
    </>
  );
};

GalleryImage.defaultProps = {
  textStyle: "text-2xs",
};

export default GalleryImage;
