import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import Cards from "../Card";
import Checkboxes from "../Checkbox";

const AcaiRadio = withStyles({
  root: {
    color: "#5E35B1",
    "&$checked": {
      color: "#5E35B1",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtonsGroup({ buckets, onChange, data }) {
  const [flavor, setFlavor] = useState("");
  
  const handleChangeFlavor = (event) => {  

    const idFlavor = buckets.filter((bucket) => {
      return bucket.name === event.target.value;
    });
    setFlavor(idFlavor[0].id);

    onChange({ ...data, name: event.target.value });
  };
  const handleChangeSizebucket = (event) => {
    onChange({
      ...data,
      sizebucket: event.target.value,
    });
  };
 
  return (
    <>
      <Container maxWidth="sm">
        <Cards title="Selecione o sabor" />
        <RadioGroup
          aria-label="bucket1"
          name="bucket1"
          onChange={handleChangeFlavor}
        >
          {buckets?.map((bucket) => (
            <FormControlLabel
              value={bucket.name}
              control={<AcaiRadio />}
              label={bucket.name}             
            />
          ))}
        </RadioGroup>
        {flavor && (
          <RadioGroup
            aria-label="sizebuck"
            name="sizebuck1"
            onChange={handleChangeSizebucket}
          >
            <Cards title="Selecione o tamanho" />
            {buckets?.map((bucket) =>
              bucket.sizebuckets
                .filter(
                  (sizebucket) =>
                    sizebucket.flavors_sizebuckets.flavor_id === flavor
                )
                .map((sizebuck) => (
                  <FormControlLabel
                    value={sizebuck.name}
                    control={<AcaiRadio />}
                    label={sizebuck.name}                   
                  />
                ))
            )}
          </RadioGroup>
        )}
        <Checkboxes
          onChange={onChange}
          data={data}
          flavor={flavor}
          buckets={buckets}        
        />
      </Container>
    </>
  );
}
