import { Box, SxProps } from "@mui/material";
import { ComponentProps, ElementRef, forwardRef } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  },
} satisfies Record<string, SxProps>;

const FocusContainer = forwardRef<ElementRef<"div">, ComponentProps<"div">>(
  function FocusContainer(props, ref) {
    return <Box {...props} component="div" sx={styles.container} ref={ref} />;
  }
);

export { FocusContainer };
