import { AspectRatio, Image, OtherProps, Text } from "@chakra-ui/react";

interface GalleryImageProps {
  src: string;
  alt: string;
  caption: string;
  textStyle?: OtherProps["textStyle"];
}

const GalleryImage: React.FC<GalleryImageProps> = (props) => {
  const { src, alt, caption, textStyle } = props;

  return (
    <>
      <AspectRatio maxW="400px" ratio={1} margin="32px auto 0 auto">
        <Image src={src} alt={alt} align="center" outline="5px solid #092955" />
      </AspectRatio>
      <Text
        marginTop="20px"
        maxWidth="750px"
        textStyle={textStyle}
        textAlign="center"
      >
        {caption}
      </Text>
    </>
  );
};

GalleryImage.defaultProps = {
  textStyle: "text-2xs",
};
export default GalleryImage;
