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
  const [flavor, setFlavor] = useState();

  const handleChangeFlavor = (props) => (event) => {
    setFlavor(props.id);
    onChange({
      ...data,
      name: event.target.value,
      price_flavor: props.price,
      personalize: [],
      price_person: 0,
    });
  };

  const handleChangeSizebucket = (props) => (event) => {
    onChange({
      ...data,
      sizebucket: event.target.value,
      price_sizeBucket: props.price,
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Cards title="Selecione o sabor" required="Obrigatório" />
        <RadioGroup aria-label="bucket1" name="bucket1">
          {buckets?.map((bucket) => (
            <FormControlLabel
              value={bucket.name}
              control={<AcaiRadio />}
              label={bucket.name}
              key={bucket.id}
              onChange={handleChangeFlavor(bucket)}
            />
          ))}
        </RadioGroup>
        {flavor && (
          <RadioGroup aria-label="sizebuck" name="sizebuck1">
            <Cards title="Selecione o tamanho" required="Obrigatório" />
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
                    key={sizebuck.id}
                    onChange={handleChangeSizebucket(sizebuck)}
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
