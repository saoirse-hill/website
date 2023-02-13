import React, { FC } from "react";
import { IconButton, Fade, useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

interface ScrollToTopFABProps {
  isVisible: boolean;
}

const ScrollToTopFAB: FC<ScrollToTopFABProps> = ({ isVisible }) => {

  const accent = useColorModeValue(
    "linear(to-l, pink.500, purple.400)",
    "linear(to-l, pink.300, purple.200)"
  );

  return (
    <Fade in={isVisible}>
        <IconButton
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } }
        position="fixed"
        bottom={"6"}
        right={"6"}
        zIndex={999}
        icon={<ChevronUpIcon />}
        bgGradient={accent}
        color="white"
        variant="solid"
        isRound
        size={"lg"}
        aria-label={"scroll to top"}
        />
    </Fade>
  );
};

export default ScrollToTopFAB;
