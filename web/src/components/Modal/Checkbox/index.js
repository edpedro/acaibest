import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
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

function Checkboxes({ onChange, data, flavor, buckets }) {
  const handleChangePeronalize = (event) => {
    let newArray = [...data.personalize, event.target.value];
    if (data.personalize.includes(event.target.value)) {
      newArray = newArray.filter((person) => person !== event.target.value);
    }
    onChange({
      ...data,
      personalize: newArray,
    });   
  };

  return (
    <>
      {flavor && (
        <div>
          <Cards title="Personalize seu pedido" />
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column>
              {buckets?.map((bucket) =>
                bucket.personalizes
                  .filter(
                    (personalize) =>
                      personalize.flavors_personalizes.flavor_id === flavor
                  )
                  .map((person) => (
                    <FormControlLabel
                      value={person.name}
                      control={<AcaiCheckbox />}
                      label={person.name}
                      labelPlacement={person.name}
                      onChange={handleChangePeronalize}
                    />
                  ))
              )}
            </FormGroup>
          </FormControl>
        </div>
      )}
    </>
  );
}
export default Checkboxes;
