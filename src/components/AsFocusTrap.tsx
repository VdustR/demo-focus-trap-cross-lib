import { FocusScope } from "@react-aria/focus";
import { ReactNode } from "react";
import { FocusContainer } from "./FocusContainer";

function AsFocusTrap({ children }: { children: ReactNode }) {
  return (
    <FocusScope autoFocus contain>
      <FocusContainer>{children}</FocusContainer>
    </FocusScope>
  );
}

export { AsFocusTrap };
