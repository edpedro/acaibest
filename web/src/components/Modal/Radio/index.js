import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import Cards from "../Card";

const AcaiRadio = withStyles({
  root: {
    color: "#5E35B1",
    "&$checked": {
      color: "#5E35B1",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtonsGroup(props) {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Cards />
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Morango"
            control={<AcaiRadio />}
            label={props.name1}
          />
          <FormControlLabel
            value="Banana"
            control={<AcaiRadio />}
            label={props.name2}
          />
          <FormControlLabel
            value="Kiwi"
            control={<AcaiRadio />}
            label={props.name3}
          />
        </RadioGroup>
      </Container>
    </>
  );
}
