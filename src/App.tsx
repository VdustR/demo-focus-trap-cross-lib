import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SxProps,
} from "@mui/material";
import { ComponentType, ReactNode, useCallback, useState } from "react";
import { AsDatePicker } from "./components/AsDatePicker";
import { AsFocusTrap } from "./components/AsFocusTrap";
import { MuiDatePicker } from "./components/MuiDatePicker";
import { MuiFocusTrap } from "./components/MuiFocusTrap";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    m: "2rem 1rem",
  },
} satisfies Record<string, SxProps>;

const libs = ["mui", "as"] as const;
type Lib = (typeof libs)[number];
const unselected = "";
type Unselected = typeof unselected;
type Value = Lib | Unselected;

const focusTrapComponents: Record<
  Lib,
  ComponentType<{
    children: ReactNode;
  }>
> = {
  mui: MuiFocusTrap,
  as: AsFocusTrap,
};

const datePickerComponents: Record<Lib, ComponentType> = {
  mui: MuiDatePicker,
  as: AsDatePicker,
};

function App() {
  const [focusTrap, setFocusTrap] = useState<Value>(unselected);
  const [datePicker, setDatePicker] = useState<Value>(unselected);

  const clear = useCallback(function clear() {
    setFocusTrap(unselected);
    setDatePicker(unselected);
  }, []);

  const FocusTrap = !focusTrap ? null : focusTrapComponents[focusTrap];
  const DatePicker = !datePicker ? null : datePickerComponents[datePicker];

  return (
    <Container sx={styles.container}>
      <FormControl>
        <FormLabel>Focus Trap</FormLabel>
        <RadioGroup
          row
          defaultValue="outlined"
          name="radio-buttons-group"
          value={focusTrap}
          onChange={(e) => setFocusTrap(e.target.value as Value)}
        >
          {libs.map((lib) => (
            <FormControlLabel
              key={lib}
              value={lib}
              control={<Radio />}
              label={lib}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>DatePicker</FormLabel>
        <RadioGroup
          row
          defaultValue="outlined"
          name="radio-buttons-group"
          value={datePicker}
          onChange={(e) => setDatePicker(e.target.value as Value)}
        >
          {libs.map((lib) => (
            <FormControlLabel
              key={lib}
              value={lib}
              control={<Radio />}
              label={lib}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {!FocusTrap || !DatePicker ? null : (
        <FocusTrap>
          <DatePicker />
          <Button onClick={clear}>Clear</Button>
        </FocusTrap>
      )}
    </Container>
  );
}

export default App;
