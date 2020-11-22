import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import Cards from "../Card";

const AcaiCheckbox = withStyles({
  root: {
    color: "#5E35B1",
    "&$checked": {
      color: "#5E35B1",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Checkboxes() {
  return (
    <Container maxWidth="sm">
      <Cards />
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column>
          <FormControlLabel
            value="end"
            control={<AcaiCheckbox color="primary" />}
            label="Granola"
            labelPlacement="Granola"
          />
          <FormControlLabel
            value="end"
            control={<AcaiCheckbox color="primary" />}
            label="Paçoca"
            labelPlacement="Paçoca"
          />
          <FormControlLabel
            value="end"
            control={<AcaiCheckbox color="primary" />}
            label="Leite ninho"
            labelPlacement="Leite ninho"
          />
        </FormGroup>
      </FormControl>
    </Container>
  );
}
export default Checkboxes;
