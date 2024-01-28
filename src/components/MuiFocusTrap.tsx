import FocusTrap from "@mui/material/Unstable_TrapFocus";
import { ReactNode } from "react";
import { FocusContainer } from "./FocusContainer";

function MuiFocusTrap({ children }: { children: ReactNode }) {
  return (
    <FocusTrap open>
      <FocusContainer>{children}</FocusContainer>
    </FocusTrap>
  );
}

export { MuiFocusTrap };
