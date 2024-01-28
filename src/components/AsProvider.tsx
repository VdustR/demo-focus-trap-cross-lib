import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { ReactNode } from "react";

function AsProvider({ children }: { children: ReactNode }) {
  return <Provider theme={defaultTheme}>{children}</Provider>;
}

export { AsProvider };
