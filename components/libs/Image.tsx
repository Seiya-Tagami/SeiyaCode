import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

export const Image = chakra(NextImage, {
  baseStyle: { maxH: 400, maxW: 400 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});