import { DatePicker } from "@adobe/react-spectrum";
import { AsProvider } from "./AsProvider";

function AsDatePicker() {
  return (
    <AsProvider>
      <DatePicker label="Event date" />
    </AsProvider>
  );
}

export { AsDatePicker };
